import {
  Connection,
  PublicKey,
  Transaction,
  TransactionMessage,
} from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import { Notify } from 'quasar';
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import * as multisig from '@sqds/multisig';

export const handleTransaction = async (
  tx: Transaction,
  label = 'Unlabeled transaction',
) => {
  const { sendTransaction } = useWallet();

  const notif = Notify.create({
    group: false, // required to be updatable
    timeout: 0, // we want to be in control when it gets dismissed
    spinner: true,
    message: label,
    caption: '...',
    position: 'bottom-right',
  });

  try {
    notif({
      caption: 'Waiting for user to sign...',
    });

    let signature = '';
    if (!useSquadsStore().useSquads) {
      signature = await sendTransaction(
        tx,
        useRPCStore().connection as Connection,
      );
    } else {
      console.log(tx.instructions);
      const blockhash = await useRPCStore().connection.getRecentBlockhash();
      const transactionMessage = new TransactionMessage({
        payerKey: new PublicKey(useSquadsStore().vaultPDA),
        recentBlockhash: blockhash.blockhash,
        instructions: tx.instructions,
      });

      await useSquadsStore().loadMultisigInfo();

      const squadsTX = multisig.instructions.vaultTransactionCreate({
        multisigPda: new PublicKey(useSquadsStore().multisigPDA),
        transactionIndex: useSquadsStore().getNewTransactionIndex,
        creator: useWallet().publicKey.value!,
        vaultIndex: 0,
        ephemeralSigners: 0,
        transactionMessage: transactionMessage,
        memo: label,
      });

      signature = await sendTransaction(
        new Transaction().add(squadsTX),
        useRPCStore().connection as Connection,
      );
    }

    notif({
      caption: `Waiting for confirmation: ${signature}`,
    });

    const latestBlockHash = await useRPCStore().connection.getLatestBlockhash();
    await useRPCStore().connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: signature,
    });

    notif({
      color: 'positive',
      timeout: 5000,
      icon: 'done',
      spinner: false,
      caption: `Confirmed: ${signature}`,
    });

    return 0;
  } catch (err: any) {
    notif({
      progress: true,
      spinner: false,
      icon: 'error',
      color: 'negative',
      timeout: 5000,
      caption: `Error handling transaction: ${err.toString()}`,
    });
  }
};