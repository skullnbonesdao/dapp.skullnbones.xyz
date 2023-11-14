import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useLocalStorage } from '@vueuse/core';

export const RPC_NETWORKS = [
  { name: 'api.devnet.solana', url: 'https://rpc.ankr.com/solana_devnet' },
  {
    name: 'rpc1',
    url: 'https://solana-mainnet.g.alchemy.com/v2/hhh3czrJbOnssV11HBINkPZSe-HzR3Jy',
  },
  { name: 'mainnet.extrnode', url: 'https://solana-mainnet.rpc.extrnode.com' },
];

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    rpc_selected: useLocalStorage('rpc_selected', RPC_NETWORKS[0]),
    connection: {} as Connection,
    admins: import.meta.env.VITE_ADMINS?.split(',') as Array<string>,
    fee_wallet: import.meta.env.VITE_FEE_WALLET,
    token_accounts: {},
  }),

  getters: {
    is_admin(self) {
      return self.admins.some(
        (entry) => entry === useWallet().publicKey.value?.toString(),
      );
    },
  },
  actions: {
    update_connection() {
      this.connection = new Connection(this.rpc_selected.url, {
        commitment: 'confirmed',
      });
    },

    async update_wallet_accounts() {
      if (useWallet().publicKey.value) {
        const response = await this.connection.getParsedTokenAccountsByOwner(
          useWallet().publicKey.value!,
          {
            programId: TOKEN_PROGRAM_ID,
          },
        );
        this.token_accounts = response.value;
      }
    },
    async get_wallet_accounts() {
      return await this.connection.getTokenAccountsByOwner(
        useWallet().publicKey.value!,
        {
          programId: TOKEN_PROGRAM_ID,
        },
      );
    },
  },
});
