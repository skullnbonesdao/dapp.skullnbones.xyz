import { defineStore } from 'pinia';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

import { useWorkspaceAdapter } from 'src/solana/connector';
import { Notify } from 'quasar';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import {
  cancelUnstakeInstruction,
  createStakingAccountInstruction,
  getRegisteredStakeAccountInfo,
  getStakingAccountInfo,
  harvestRewardsInstruction,
  stakeTokensInstruction,
  unstakeTokensInstruction,
  withdrawTokensInstruction,
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
  POLIS,
} from 'src/solana/staratlas/locker/atlas/consts';
import {
  RegisteredStake,
  StakingAccount,
} from 'src/solana/staratlas/locker/atlas/types/types_atlas_locker';

const NAME = 'AtlasLocker';

export const useAtlasLockerStore = defineStore('atlasLockerStore', {
  state: () => ({
    registeredStakeAtlasAddress: {} as PublicKey,
    registeredStakeAtlasAddressInfo: {} as RegisteredStake | undefined,

    stakingAccountAtlasAddress: {} as PublicKey,
    stakingAccountAtlasInfo: {} as StakingAccount | undefined,
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
            stakingAccount: this.stakingAccountAtlasAddress,
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

    async claimTokens() {
      try {
        const tx = new Transaction();
        (
          await harvestRewardsInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            rewardMint: POLIS,
            registeredStake: (await findRegisteredStakeAtlas())[0],
            stakingAccount: this.stakingAccountAtlasAddress,
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] claimTokens!`);

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

    async unstakeTokens() {
      try {
        const tx = new Transaction();
        (
          await unstakeTokensInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            registeredStake: (await findRegisteredStakeAtlas())[0],
            stakingAccount: this.stakingAccountAtlasAddress,
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] claimTokens!`);

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

    async cancelUnstake() {
      try {
        const tx = new Transaction();
        (
          await cancelUnstakeInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            registeredStake: (await findRegisteredStakeAtlas())[0],
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] cancelUnstake!`);

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

    async withdrawTokens() {
      try {
        const tx = new Transaction();
        (
          await withdrawTokensInstruction({
            connection: useRPCStore().connection,
            user: getSigner(),
            authority: getSigner(),
            stakeMint: ATLAS,
            registeredStake: (await findRegisteredStakeAtlas())[0],
            stakingAccount: this.stakingAccountAtlasAddress,
            programId: ATLAS_LOCKER,
          })
        ).instructions.forEach((t) => tx.add(t));

        console.log(`[${NAME}] withdrawTokens!`);

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
        this.stakingAccountAtlasInfo = undefined;

        try {
          this.registeredStakeAtlasAddress = (
            await findRegisteredStakeAtlas()
          )[0];

          this.stakingAccountAtlasAddress = (
            await findStakingAccount('ATLAS')
          )[0];

          this.registeredStakeAtlasAddressInfo =
            (await getRegisteredStakeAccountInfo(
              useRPCStore().connection as Connection,
              this.registeredStakeAtlasAddress,
              ATLAS_LOCKER,
            )) as unknown as RegisteredStake;

          this.stakingAccountAtlasInfo = (await getStakingAccountInfo(
            useRPCStore().connection as Connection,
            this.stakingAccountAtlasAddress,
            ATLAS_LOCKER,
          )) as unknown as StakingAccount;
        } catch (err) {}

        console.log(`[${NAME}] updated!`);
      }
    },
  },
});
