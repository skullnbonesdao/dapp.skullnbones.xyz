import { defineStore } from 'pinia';

import { useWorkspaceAdapter } from 'src/solana/connector';
import { Game } from '@staratlas/sage';
import { PublicKey } from '@solana/web3.js';
import { readFromRPCOrError } from '@staratlas/data-source';
import { useRPCStore } from 'stores/rpcStore';

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
        const pg_sage = useWorkspaceAdapter()!.pg_sage.value;

        try {
          this.games =
            (await pg_sage?.account.game.all()) as never as GameAccount[];

          this.game = {
            publicKey: this.games[0].publicKey,
            account: await readFromRPCOrError(
              useRPCStore().connection,
              pg_sage as any,
              this.games[0].publicKey,
              Game,
              'confirmed',
            ),
          };
        } catch (err) {
          this.games = undefined;
          this.game = undefined;
        }

        console.log(`[Updated] ${NAME}`);
      }
    },
  },
});
