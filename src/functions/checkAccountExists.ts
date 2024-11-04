import { useRPCStore } from 'stores/rpcStore';
import { PublicKey } from '@solana/web3.js';

export async function checkAccountExists(publicKey: PublicKey) {
  try {
    // Fetch account information
    const accountInfo =
      await useRPCStore().connection.getAccountInfo(publicKey);

    if (accountInfo) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking account:', error);
    return false; // Error occurred, treat as non-existent account
  }
}
