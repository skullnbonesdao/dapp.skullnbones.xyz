import { defineStore } from 'pinia';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { Raffle } from 'src/solana/raffle/RaffleInterface';

export const useRaffleStore = defineStore('raffleStore', {
  state: () => ({
    raffles: [] as Raffle[],
  }),
  actions: {
    async updateStore() {
      const pg_raffle = useWorkspaceAdapter()!.pg_raffle.value;

      this.raffles = pg_raffle?.account.raffle.all() as never;

      console.log('[Updated] RaffleStore');
    },
  },
});
