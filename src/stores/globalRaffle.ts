import { defineStore } from 'pinia';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import * as discord from 'discord-webhook-node';

export const RAFLLE_WHITELIST_NAME = 'Crew';

const DISCORD_URL = import.meta.env.VITE_DISCORD_WEBHOOK;

export const useRaffleStore = defineStore('raffleStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    disocrd_handle: new discord.Webhook(DISCORD_URL),
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
