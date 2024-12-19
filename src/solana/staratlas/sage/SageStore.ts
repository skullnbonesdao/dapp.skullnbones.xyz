import { defineStore } from 'pinia';

import { useWorkspaceAdapter } from 'src/solana/connector';
import { Game } from 'src/solana/staratlas/sage/types/types_sage';
import { PublicKey } from '@solana/web3.js';

const NAME = 'SageStore';

export interface GameAccount {
  publicKey: PublicKey;
  account: Game;
}

export const useSageStore = defineStore('sageStore', {
  state: () => ({
    game: {} as GameAccount | undefined,
    games: [] as GameAccount[] | undefined,
  }),

  getters: {},
  actions: {
    async updateStore() {
      if (useWorkspaceAdapter()) {
        const pg_sage = useWorkspaceAdapter()?.pg_sage.value;

        try {
          this.games =
            (await pg_sage?.account.game.all()) as never as GameAccount[];

          this.game = this.games[0];
        } catch (err) {
          this.games = undefined;
          this.game = undefined;
        }

        console.log(`[Updated] ${NAME}`);
      }
    },
  },
});
