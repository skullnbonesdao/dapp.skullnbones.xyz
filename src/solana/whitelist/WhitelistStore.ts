import { defineStore } from 'pinia';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import {
  Whitelist,
  WhitelistEntry,
} from 'src/solana/whitelist/WhitelistBuilder';

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useWhitelistStore = defineStore('whitelistStore', {
  state: () => ({
    whitelists: [] as Whitelist[],
    whitelistEntries: [] as WhitelistEntry[],
  }),

  getters: {
    check_wallet_whitelisted(state) {
      return state.whitelistEntries.some(
        (entry: any) =>
          entry.account.whitelisted.toString() ===
          useWallet().publicKey.value?.toString(),
      );
    },
  },
  actions: {
    async updateStore() {
      const pg_whitelist = useWorkspaceAdapter()?.programs.pg_whitelist.value;

      this.whitelists = pg_whitelist?.account.whitelist.all() as never;
      this.whitelistEntries =
        (await pg_whitelist?.account.whitelistEntry.all()) as never;

      console.log('[Updated] WhitelistStore');
    },
  },
});
