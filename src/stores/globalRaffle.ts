import { defineStore } from 'pinia';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useRaffleStore = defineStore('raffleStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    raffles: [],
  }),

  getters: {
    get_running_raffles(state) {
      return state.raffles.filter(
        (raffle) => raffle.account.isRunning === true,
      );
    },
  },
  actions: {
    async update_raffles() {
      const { pg_raffle } = useWorkspaceAdapter();
      if (useWallet().publicKey.value) {
        this.is_loading = true;
        this.raffles = await pg_raffle.value.account.raffle.all();
        this._updateCount++;
      }
      this.is_loading = false;
    },
  },
});