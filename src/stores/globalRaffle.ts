import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

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
