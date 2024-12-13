import { defineStore } from 'pinia';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

import { useWorkspaceAdapter } from 'src/solana/connector';
import { Notify } from 'quasar';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import {
  createStakingAccountInstruction,
  getStakingAccountInfo,
  stakeTokensInstruction,
} from '@staratlas/factory';
import { useRPCStore } from 'stores/rpcStore';
import {
  findATA,
  findRegisteredStakeAtlas,
  findStakingAccount,
} from 'src/solana/staratlas/locker/atlas/AtlasLockerInterface';
import {
  ATLAS,
  ATLAS_DECIMALS,
  ATLAS_LOCKER,
} from 'src/solana/staratlas/locker/atlas/consts';
import { StakingAccount } from 'src/solana/staratlas/locker/atlas/types/types_atlas_locker';

const NAME = 'AtlasLocker';

export const useAtlasLockerStore = defineStore('atlasLockerStore', {
  state: () => ({
    registeredStakeAtlas: {} as PublicKey,
    registeredStakePolis: {} as PublicKey,
    stakingAccountAtlas: {} as PublicKey,
    registeredStakeAtlasInfo: {} as StakingAccount | undefined,
  }),

  getters: {},
  actions: {
    async createStakingAccount() {
      try {
        const tx = new Transaction();
        (
          await createStakingAccountInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            registeredStake: (await findRegisteredStakeAtlas())[0],
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] createStakingAccount!`);
        return tx;
      } catch (err: any) {
        console.error(err);
        Notify.create({
          message: err.message,
          type: 'negative',
          position: 'bottom-right',
        });
      }
    },

    async stakeTokens(amount_ui: number) {
      try {
        const tx = new Transaction();
        (
          await stakeTokensInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            stakeMint: ATLAS,
            tokenSource: findATA(getSigner(), ATLAS),
            stakingAccount: this.stakingAccountAtlas,
            stakeQuantity: calcAmountToTransfer(amount_ui, ATLAS_DECIMALS),
            registeredStake: (await findRegisteredStakeAtlas())[0],
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] stakeTokens!`);

        return tx;
      } catch (err: any) {
        console.error(err);
        Notify.create({
          message: err.message,
          type: 'negative',
          position: 'bottom-right',
        });
      }
    },

    async updateStore() {
      if (useWorkspaceAdapter()) {
        this.registeredStakeAtlasInfo = undefined;

        try {
          this.registeredStakeAtlas = (await findRegisteredStakeAtlas())[0];
          this.stakingAccountAtlas = (await findStakingAccount('ATLAS'))[0];

          this.registeredStakeAtlasInfo = (await getStakingAccountInfo(
            useRPCStore().connection as Connection,
            this.stakingAccountAtlas,
            ATLAS_LOCKER,
          )) as unknown as StakingAccount;
        } catch (err) {}

        console.log(`[${NAME}] updated!`);
      }
    },
  },
});
