import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useWhitelist = defineStore('whitelistStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    whitelists: [],
    whitelistEntries: [],
  }),

  getters: {
    check_wallet_whitelisted(state) {
      return state.whitelistEntries.some(
        (enetry) =>
          enetry.account.whitelisted.toString() ===
          useWallet().publicKey.value?.toString(),
      );
    },
  },
  actions: {
    async update_whitelist() {
      const { pg_whitelist } = useWorkspaceAdapter();
      this.is_loading = true;

      this.whitelists = await pg_whitelist.value.account.whitelist.all();
      this.whitelistEntries =
        await pg_whitelist.value.account.whitelistEntry.all();

      this.is_loading = false;
    },
  },
});
