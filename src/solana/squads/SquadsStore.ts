import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import * as multisig from '@sqds/multisig';
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionMessage,
} from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { useWallet } from 'solana-wallets-vue';
import { Multisig } from '@sqds/multisig/lib/generated';

export const useSquadsStore = defineStore('squadsStore', {
  state: () => ({
    store: useLocalStorage('store', []),

    useSquads: useLocalStorage('useSquads', false),

    multisigPDA: useLocalStorage('multisigPDA', ''),
    vaultPDA: useLocalStorage('vaultPDA', ''),
    multisigInfo: {} as Multisig,
  }),

  getters: {
    getLink(state) {
      if (state.multisigPDA.length == 0) return 'https://app.squads.so';
      else return `https://app.squads.so/squads/${state.vaultPDA}/`;
    },
    getVaultPDA(state) {
      if (!state.multisigPDA) return '';

      try {
        const [vaultPda, bump] = multisig.getVaultPda({
          multisigPda: new PublicKey(state.multisigPDA),
          index: 0,
        });
        state.vaultPDA = vaultPda.toString();
        return vaultPda;
      } catch (err) {
        console.error(err);
      }
    },
    getNewTransactionIndex(state) {
      const currentTransactionIndex = Number(
        state.multisigInfo.transactionIndex,
      );
      return BigInt(currentTransactionIndex + 1);
    },
  },
  actions: {
    addMultisigPDA(label: string, address: string) {
      try {
        if (this.store.find((m: any) => m.address.includes(address))) return;
        else {
          if (address)
            this.store.push({ label: label, address: address } as never);
          return;
        }
      } catch (error) {
        this.store = [];
        this.store.push({ label: label, address: address } as never);
      }
    },
    async loadMultisigInfo() {
      this.multisigInfo = await multisig.accounts.Multisig.fromAccountAddress(
        useRPCStore().connection as Connection,
        new PublicKey(this.multisigPDA),
      );
    },
  },
});

export async function convert2squadsTransaction(
  instructions: Transaction,
  memo: string,
) {
  await useSquadsStore().loadMultisigInfo();

  const transactionMessage = new TransactionMessage({
    payerKey: new PublicKey(useSquadsStore().vaultPDA),
    recentBlockhash: (await useRPCStore().connection.getLatestBlockhash())
      .blockhash,
    instructions: instructions.instructions,
  });

  const tx = multisig.instructions.vaultTransactionCreate({
    multisigPda: new PublicKey(useSquadsStore().multisigPDA),
    transactionIndex: useSquadsStore().getNewTransactionIndex,
    creator: useWallet().publicKey.value!,
    vaultIndex: 0,
    ephemeralSigners: 0,
    transactionMessage: transactionMessage,
    memo: memo,
  });

  return tx;
}
