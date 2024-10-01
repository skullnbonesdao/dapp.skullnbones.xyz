import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
} from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import * as multisig from '@sqds/multisig';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';

export async function build_send(
  memo: string,
  instructions: TransactionInstruction[],
  vaultPDA: PublicKey,
  multisigPDA: PublicKey,
) {
  const { sendTransaction, publicKey } = useWallet();

  const transactionMessage = new TransactionMessage({
    payerKey: vaultPDA,
    recentBlockhash: (await useRPCStore().connection.getLatestBlockhash())
      .blockhash,
    instructions: instructions,
  });

  const multisigInfo = await multisig.accounts.Multisig.fromAccountAddress(
    useRPCStore().connection as Connection,
    new PublicKey(multisigPDA),
  );

  const currentTransactionIndex = BigInt(
    Number(multisigInfo.transactionIndex) + 1,
  );

  const ix = multisig.instructions.vaultTransactionCreate({
    multisigPda: multisigPDA,
    transactionIndex: currentTransactionIndex,
    creator: publicKey.value!,
    vaultIndex: 0,
    ephemeralSigners: 0,
    transactionMessage: transactionMessage,
    memo: memo,
  });

  console.log('build: ' + memo);

  return await sendTransaction(
    new Transaction().add(ix),
    useRPCStore().connection as Connection,
  );
}
