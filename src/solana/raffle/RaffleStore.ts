import { defineStore } from 'pinia';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { PublicKey } from '@solana/web3.js';
import { IRaffle } from 'src/solana/raffle/RaffleInterface';

export interface RaffleAccount {
  publicKey: PublicKey;
  account: IRaffle;
}

export const useRaffleStore = defineStore('raffleStore', {
  state: () => ({
    raffles: [] as RaffleAccount[],
  }),
  getters: {
    getRunningRaffles(state) {
      return state.raffles.filter(
        (raffle) =>
          Object.keys(raffle.account.state)[0] == 'running' ||
          Object.keys(raffle.account.state)[0] == 'full' ||
          Object.keys(raffle.account.state)[0] == 'claimprize',
      );
    },
  },
  actions: {
    async updateStore() {
      if (useWorkspaceAdapter())
        try {
          const pg_raffle = useWorkspaceAdapter()!.pg_raffle.value;
          this.raffles = (
            (await pg_raffle?.account.raffle.all()) as unknown as RaffleAccount[]
          ).filter((raffle) => raffle.account.name);

          console.log('[Updated] RaffleStore');
        } catch (err) {
          console.error(err);
        }
    },
  },
});
