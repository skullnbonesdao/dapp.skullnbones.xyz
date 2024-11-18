import { Connection, Transaction } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import { Notify } from 'quasar';

export const handleTransaction = async (tx: Transaction) => {
  const { sendTransaction } = useWallet();

  try {
    notification(`Waiting for confirmation...\n fjkdfjskdfl`);
    const signature = await sendTransaction(
      tx,
      useRPCStore().connection as Connection,
    );

    notification(`Waiting for confirmation...\n ${signature}`, n);
  } catch (err: any) {
    Notify.create({
      color: 'negative',
      position: 'bottom-left',
      message: `Error handling transaction: ${err.toString()}`,
    });
  }
};

const notification = (message: string) => {
  Notify.registerType('my-notif', {
    message: message,
  });
  console.log(`[Message] ${message}`);
};
