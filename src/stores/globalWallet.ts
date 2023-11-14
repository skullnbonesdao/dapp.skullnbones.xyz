import { defineStore } from 'pinia';
import { Connection, ParsedAccountData, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useGlobalStore } from 'stores/globalStore';

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalWalletStore = defineStore('walletStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    token_accounts: [] as ParsedAccountData[],
  }),

  getters: {},
  actions: {
    async update_accounts() {
      this.is_loading = true;
      this.token_accounts = [];

      if (useWallet().publicKey.value) {
        this.token_accounts = [];
        this.token_accounts = (
          await useGlobalStore().connection.getParsedTokenAccountsByOwner(
            useWallet().publicKey.value!,
            {
              programId: TOKEN_PROGRAM_ID,
            },
          )
        ).value;
      }
      this.is_loading = false;
    },
  },
});
