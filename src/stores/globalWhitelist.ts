import { defineStore } from 'pinia';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';

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
        (entry: any) =>
          entry.account.whitelisted.toString() ===
          useWallet().publicKey.value?.toString(),
      );
    },
  },
  actions: {
    async update_whitelist() {
      if (useWorkspaceAdapter()) {
        const { pg_whitelist } = useWorkspaceAdapter();
        this.is_loading = true;

        this.whitelists = await pg_whitelist.value.account.whitelist.all();
        this.whitelistEntries =
          await pg_whitelist.value.account.whitelistEntry.all();

        this.is_loading = false;

        console.log('update_whitelist');
      }
    },
  },
});
