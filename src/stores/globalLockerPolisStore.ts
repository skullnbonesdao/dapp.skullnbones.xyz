import { defineStore } from 'pinia';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
} from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import { RPC_NETWORKS } from 'stores/interfaces/RPC_Networks';
import * as multisig from '@sqds/multisig';
import { getMultisigPda, getVaultPda } from '@sqds/multisig';
import { useRPCStore } from 'stores/rpcStore';
import { Multisig } from '@sqds/multisig/lib/generated';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import {
  cancelUnstakeInstruction,
  createHarvestInstruction,
  createSettleInstruction,
  createStakingAccountInstruction,
  getRegisteredStake,
  getStakingAccount,
  getStakingAccountInfo,
  harvestRewardsInstruction,
  stakeTokensInstruction,
  unstakeTokensInstruction,
  withdrawTokensInstruction,
} from '@staratlas/factory';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { BN, web3 } from '@coral-xyz/anchor';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { amount } from '@metaplex-foundation/js';

import { SAFactory_LockerPolis } from 'src/StarAtlasInterfaces/SAFactory_LockerPolis';
import * as multisig from '@sqds/multisig';
import { build_send } from 'src/StarAtlasInterfaces/Squads_TXPacker';

const MEMO_PREFIX_POLIS = '[POLIS-LOCKER] ';
export const useLockerPolisStore = defineStore('globalLockerPolisStore', {
  state: () => ({
    lockerFactory: new SAFactory_LockerPolis(),
    multisigPDA: useLocalStorage('multisigPDA', ''),
    vaultPDA: {} as PublicKey,
  }),

  getters: {},
  actions: {
    async init() {
      if (useAnchorWallet().value) {
        //setVaultPDA
        const [vaultPda, bump] = multisig.getVaultPda({
          multisigPda: new PublicKey(this.multisigPDA),
          index: 0,
        });
        this.vaultPDA = vaultPda;
        //this.lockerFactory.init(useAnchorWallet().value!, vaultPda, vaultPda);
        this.lockerFactory.init(
          useAnchorWallet().value!,
          new PublicKey('CK76hq8seq1eQ5CpSJ1SHmdYovZH8ZEDKzCnTCCfPoNM'),
          new PublicKey('CK76hq8seq1eQ5CpSJ1SHmdYovZH8ZEDKzCnTCCfPoNM'),
        );
        await this.lockerFactory.setAccounts();
      }
    },

    async make_createLocker(duration: number, amount: number) {
      const { sendTransaction, publicKey } = useWallet();

      const transaction = await this.lockerFactory.buildCreateLocker(
        duration,
        amount,
      );
      console.log(transaction);

      await sendTransaction(
        transaction,
        useRPCStore().connection as Connection,
        {
          skipPreflight: true,
        },
      );

      const signature = await build_send(
        MEMO_PREFIX_POLIS + 'Create Locker',
        (await this.lockerFactory.buildCreateLocker(duration, amount))
          .instructions,
        this.vaultPDA,
        new PublicKey(this.multisigPDA),
      );

      await handle_confirmation(signature);
    },
  },
});
