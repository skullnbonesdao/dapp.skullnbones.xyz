import { Connection, Transaction } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import { Notify } from 'quasar';

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

    const signature = await sendTransaction(
      tx,
      useRPCStore().connection as Connection,
    );

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
