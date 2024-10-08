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
import { useWallet } from 'solana-wallets-vue';
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

import { SAFactory_LockerAtlas } from 'src/StarAtlasInterfaces/SAFactory_LockerAtlas';
const MEMO_PREFIX_ATLAS = '[ATLAS-LOCKER] ';
const MEMO_PREFIX_POLIS = '[POLIS-LOCKER] ';
export const LOCKER_TOKEN_DECIMALS = 8;

export const ATLAS = new PublicKey(
  'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
);
export const POLIS = new PublicKey(
  'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk',
);

const ATLAS_LOCKER = new PublicKey(
  'ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc',
);

const ATLAS_LOCKER_PROGRAM_AUTH = new PublicKey(
  'ATLkZsBofSKG845dNFpNoUyMciGpeH29BCbMqYFUoxzU',
);

export const useStarAtlasLockerStore = defineStore(
  'globalStarAtlasLockerStore',
  {
    state: () => ({
      multisigPDA: useLocalStorage('multisigPDA', ''),
      vaultPDA: {} as PublicKey,
      multisigInfo: {} as Multisig,
      registeredStakeAtlas: {} as PublicKey,
      registeredStakePolis: {} as PublicKey,
      stakingAccountAtlas: {} as PublicKey,
      stakingAccountAtlasInfo: {} as PublicKey | undefined,
      atlas_balance_wallet: '0',
      polis_balance_wallet: '0',
      atlas_balance_squads: '0',
      polis_balance_squads: '0',
      atlas_balance_locker: '0',
      polis_balance_locker: '0',
      SAFactory_LockerAtlas: new SAFactory_LockerAtlas(),
    }),

    getters: {
      getMultisigPDA(state) {
        const multisigPDA = new PublicKey(state.multisigPDA);
        return multisigPDA;
      },
      getVaultPDA() {
        try {
          const [vaultPda] = multisig.getVaultPda({
            multisigPda: new PublicKey(this.multisigPDA),
            index: 0,
          });

          return vaultPda;
        } catch (err) {
          return '';
        }
      },

      getNewTransactionIndex(state) {
        const currentTransactionIndex = Number(
          state.multisigInfo.transactionIndex,
        );
        return BigInt(currentTransactionIndex + 1);
      },
    },
    actions: {
      async setAccounts() {
        //REST
        useStarAtlasLockerStore().atlas_balance_wallet = '0';
        useStarAtlasLockerStore().polis_balance_wallet = '0';
        useStarAtlasLockerStore().atlas_balance_squads = '0';
        useStarAtlasLockerStore().polis_balance_squads = '0';
        useStarAtlasLockerStore().atlas_balance_locker = '0';
        useStarAtlasLockerStore().polis_balance_locker = '0';
        useStarAtlasLockerStore().stakingAccountAtlasInfo = undefined;

        //setVaultPDA
        const [vaultPda] = multisig.getVaultPda({
          multisigPda: new PublicKey(this.multisigPDA),
          index: 0,
        });
        this.vaultPDA = vaultPda;

        //setMultisigInfo
        this.multisigInfo = await multisig.accounts.Multisig.fromAccountAddress(
          useRPCStore().connection as Connection,
          new PublicKey(this.multisigPDA),
        );

        //setRegisteredStake
        //ATLAS
        const [registeredStakeAtlas] = await getRegisteredStake(
          ATLAS_LOCKER,
          ATLAS_LOCKER_PROGRAM_AUTH,
          ATLAS,
          POLIS,
        );
        this.registeredStakeAtlas = registeredStakeAtlas;

        //setRegisteredStake
        //POLIS
        const [registeredStakePolis] = await getRegisteredStake(
          ATLAS_LOCKER,
          ATLAS_LOCKER_PROGRAM_AUTH,
          ATLAS,
          POLIS,
        );
        this.registeredStakePolis = registeredStakePolis;

        //setStakingAccount
        try {
          const [stakingAccountAtlas] = await getStakingAccount(
            ATLAS_LOCKER,
            this.vaultPDA,
            this.registeredStakeAtlas,
          );
          this.stakingAccountAtlas = stakingAccountAtlas;
        } catch (err) {}

        //setStakingAccountAtlasInfo
        try {
          this.stakingAccountAtlasInfo = (await getStakingAccountInfo(
            useRPCStore().connection as Connection,
            this.stakingAccountAtlas,
            ATLAS_LOCKER,
          )) as any;
        } catch (err) {}

        //Account Balances
        await getTokenAccountAmounts();
      },

      //ATLAS LOCKER
      async build_CreateStatingAccount(this) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(
          MEMO_PREFIX_ATLAS + 'CreateStatingAccount: ' + amount,
          [
            (await this.SAFactory_LockerAtlas.buildCreateStatingAccount())
              .instructions[0],
          ],
        );
      },

      async build_StakeTokens(this, amount: number) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(MEMO_PREFIX_ATLAS + 'StakeTokens: ' + amount, [
          (await this.SAFactory_LockerAtlas.buildStakeTokens(amount))
            .instructions[0],
        ]);
      },

      async build_harvestRewards(this) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(MEMO_PREFIX_ATLAS + 'HarvestRewards', [
          (await this.SAFactory_LockerAtlas.buildHarvestRewards())
            .instructions[0],
        ]);
      },

      async build_withdrawTokens(this) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(MEMO_PREFIX_ATLAS + 'WithdrawTokens', [
          (await this.SAFactory_LockerAtlas.buildWithdrawTokens())
            .instructions[0],
        ]);
      },

      async build_unstakeTokens(this) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(MEMO_PREFIX_ATLAS + 'UnstakeTokens', [
          (await this.SAFactory_LockerAtlas.buildUnstakeTokens())
            .instructions[0],
        ]);
      },

      async build_cancelUnstake(this) {
        await this.SAFactory_LockerAtlas.init(this.multisigPDA as PublicKey);

        await build_send(MEMO_PREFIX_ATLAS + 'CancelUnstake', [
          (await this.SAFactory_LockerAtlas.buildCancelUnstake())
            .instructions[0],
        ]);
      },
    },
  },
);

async function build_send(
  memo: string,
  instructions: TransactionInstruction[],
) {
  const { sendTransaction, publicKey } = useWallet();

  const transactionMessage = new TransactionMessage({
    payerKey: useStarAtlasLockerStore().vaultPDA,
    recentBlockhash: (await useRPCStore().connection.getLatestBlockhash())
      .blockhash,
    instructions: instructions,
  });

  const ix = multisig.instructions.vaultTransactionCreate({
    multisigPda: new PublicKey(useStarAtlasLockerStore().multisigPDA),
    transactionIndex: useStarAtlasLockerStore().getNewTransactionIndex,
    creator: publicKey.value!,
    vaultIndex: 0,
    ephemeralSigners: 0,
    transactionMessage: transactionMessage,
    memo: memo,
  });

  console.log('build: ' + memo);

  const signature = await sendTransaction(
    new Transaction().add(ix),
    useRPCStore().connection as Connection,
  );
  await handle_confirmation(signature);
}

async function getTokenAccountAmounts() {
  const { publicKey } = useWallet();

  if (!publicKey.value) return;

  //Wallet
  const atlas_ata_wallet = await getAssociatedTokenAddress(
    ATLAS,
    publicKey.value!,
  );
  const polis_ata_wallet = await getAssociatedTokenAddress(
    POLIS,
    publicKey.value!,
  );

  //Squads

  const atlas_ata_squads = await getAssociatedTokenAddress(
    ATLAS,
    useStarAtlasLockerStore().vaultPDA,
    true,
  );

  const polis_ata_squads = await getAssociatedTokenAddress(
    POLIS,
    useStarAtlasLockerStore().vaultPDA,
    true,
  );

  //Locker
  const atlas_ata_locker = await getAssociatedTokenAddress(
    ATLAS,
    useStarAtlasLockerStore().stakingAccountAtlas,
    true,
  );

  // const polis_ata_locker = await getAssociatedTokenAddress(
  //   POLIS,
  //   useStarAtlasLockerStore().stakingAccountPolis,
  // );

  try {
    useStarAtlasLockerStore().atlas_balance_wallet =
      (await useRPCStore().connection.getTokenAccountBalance(atlas_ata_wallet))
        .value.uiAmountString ?? '0';
  } catch (error) {
    useStarAtlasLockerStore().atlas_balance_wallet = '-';
  }
  try {
    useStarAtlasLockerStore().polis_balance_wallet =
      (await useRPCStore().connection.getTokenAccountBalance(polis_ata_wallet))
        .value.uiAmountString ?? '0';
  } catch (error) {
    useStarAtlasLockerStore().polis_balance_wallet = '-';
  }
  try {
    useStarAtlasLockerStore().atlas_balance_squads =
      (await useRPCStore().connection.getTokenAccountBalance(atlas_ata_squads))
        .value.uiAmountString ?? '0';
  } catch (error) {
    useStarAtlasLockerStore().atlas_balance_squads = '-';
  }
  try {
    useStarAtlasLockerStore().polis_balance_squads =
      (await useRPCStore().connection.getTokenAccountBalance(polis_ata_squads))
        .value.uiAmountString ?? '0';
  } catch (error) {
    useStarAtlasLockerStore().polis_balance_squads = '-';
  }
  try {
    useStarAtlasLockerStore().atlas_balance_locker =
      (await useRPCStore().connection.getTokenAccountBalance(atlas_ata_locker))
        .value.uiAmountString ?? '';
  } catch (error) {
    useStarAtlasLockerStore().atlas_balance_locker = '-';
  }
}
