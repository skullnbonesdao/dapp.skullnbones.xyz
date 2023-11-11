import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

export const RPC_NETWORKS = [
  { name: 'api.devnet.solana', url: 'https://rpc.ankr.com/solana_devnet' },
  { name: 'localnet', url: 'http://127.0.0.1:8899' },
];

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    rpc_selected: RPC_NETWORKS[0],
    connection: new Connection('https://api.devnet.solana.com', {
      commitment: 'confirmed',
    }),
    admins: import.meta.env.VITE_ADMINS?.split(',') as Array<string>,
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
