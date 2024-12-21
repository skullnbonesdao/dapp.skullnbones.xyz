import { defineStore } from 'pinia';
import { PublicKey, Transaction } from '@solana/web3.js';

import { useWorkspaceAdapter } from 'src/solana/connector';

import {
  findProxy,
  findProxyATA,
  findProxyEscrow,
  instruction_claimRewards,
  instruction_newProxy,
  instruction_newProxyEscrow,
  instruction_proxyExit,
  instruction_proxyLock,
  Proxy,
} from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { Notify } from 'quasar';
import {
  findEscrow,
  findEscrowATA,
  instruction_newEscrow,
} from 'src/solana/staratlas/locker/polis/LockedVoterInterface';

import { getSigner } from 'src/solana/squads/SignerFinder';
import {
  duration_2_ERAs,
  instruction_createEscrowHistory,
  instruction_sync,
} from 'src/solana/staratlas/locker/polis/SnapshotsInterface';
import { BN } from '@coral-xyz/anchor';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { POLIS_DECIMALS } from 'src/solana/staratlas/locker/polis/consts';
import { ProxyEscrow } from 'src/solana/staratlas/locker/polis/types/types_proxy_rewarder';
import { Escrow } from 'src/solana/staratlas/locker/polis/types/types_locked_voter';
import { useRPCStore } from 'stores/rpcStore';
import { findATA } from 'src/solana/staratlas/locker/atlas/AtlasLockerInterface';
import { useWallet } from 'solana-wallets-vue';
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { POLIS } from 'src/solana/staratlas/locker/atlas/consts';
import { createAssociatedTokenAccountInstruction } from '@solana/spl-token';

const NAME = 'PolisLocker';

export const usePolisLockerStore = defineStore('polisLockerStore', {
  state: () => ({
    balanceWallet: '0',
    balanceSquads: '0',
    balanceLocker: '0',

    proxy: {} as Proxy | undefined,
    proxyEscrow: {} as ProxyEscrow | undefined,
    escrow: {} as Escrow | undefined,
  }),

  getters: {},
  actions: {
    async createTokenAccounts() {
      try {
        const tx = new Transaction();

        // (4) Associated Token Program Instruction
        tx.add(
          createAssociatedTokenAccountInstruction(
            getSigner(),
            findProxyATA()[0],
            findProxy()[0],
            POLIS,
          ),
        );

        // (5) Associated Token Program Instruction
        tx.add(
          createAssociatedTokenAccountInstruction(
            getSigner(),
            findEscrowATA()[0],
            findEscrow()[0],
            POLIS,
          ),
        );

        console.log(`[${NAME}] create tokenAccounts!`);
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

    async createLocker(amount_ui: number, duration_sec: number) {
      try {
        const tx = new Transaction();
        let instruction = undefined;

        const amountToTransfer = calcAmountToTransfer(
          amount_ui,
          POLIS_DECIMALS,
        );

        // (1) Proxy Rewarder: New Proxy Escrow
        if (
          !(await useRPCStore().connection.getAccountInfo(findProxyEscrow()[0]))
            ?.data
        ) {
          instruction = await instruction_newProxyEscrow();
          if (instruction) {
            tx.add(instruction);
          }
        }

        // (2) Proxy Rewarder: New Proxy
        if (
          !(await useRPCStore().connection.getAccountInfo(findProxy()[0]))?.data
        ) {
          instruction = await instruction_newProxy();
          if (instruction) {
            tx.add(instruction);
          }
        }

        // (3) Locked Voter: New Escrow
        instruction = await instruction_newEscrow();
        if (instruction) {
          tx.add(instruction);
        }

        // (6) Snapshots: Create Escrow History
        for (const era of duration_2_ERAs(duration_sec)) {
          instruction = await instruction_createEscrowHistory(era);
          if (instruction) {
            tx.add(instruction);
          }
        }

        // (7) Proxy Rewarder: Proxy Lock
        instruction = await instruction_proxyLock(
          new BN(amountToTransfer),
          new BN(duration_sec),
        );
        if (instruction) {
          tx.add(instruction);
        }

        console.log(`[${NAME}] create locker!`);
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
    async syncLocker() {
      try {
        const tx = new Transaction();
        let instruction = undefined;

        const duration_sec =
          parseInt(this.escrow!.escrowEndsAt.toString()) -
          parseInt(this.escrow!.escrowStartedAt.toString());

        // (8) Snapshots: Sync
        for (const era of duration_2_ERAs(duration_sec)) {
          instruction = await instruction_sync(era);
          if (instruction) {
            tx.add(instruction);
          }
        }

        console.log(`[${NAME}] sync locker!`);
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

    async addTokensToLocker(
      amount_ui: number,
      duration_sec_input: number,
      expand = false,
    ) {
      try {
        const tx = new Transaction();
        let instruction = undefined;
        let duration_sec = duration_sec_input;

        if (expand == false) {
          duration_sec =
            parseInt(this.escrow!.escrowEndsAt.toString()) -
            Math.floor(new Date().getTime() / 1000);
        }

        const amountToTransfer = calcAmountToTransfer(
          amount_ui,
          POLIS_DECIMALS,
        );

        // Proxy Rewarder: Proxy Lock
        instruction = await instruction_proxyLock(
          new BN(amountToTransfer),
          new BN(duration_sec),
        );
        if (instruction) {
          tx.add(instruction);
        }

        console.log(`[${NAME}] add tokens to locker!`);
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

    async claimLocker() {
      try {
        const duration_sec =
          parseInt(this.escrow!.escrowEndsAt.toString()) -
          parseInt(this.escrow!.escrowStartedAt.toString());

        console.log(duration_sec);
        const tx = new Transaction();
        let instruction = undefined;

        // CLAIM
        for (const era of duration_2_ERAs(duration_sec)) {
          instruction = await instruction_claimRewards(era);
          if (instruction) {
            tx.add(instruction);
          }
        }

        console.log(`[${NAME}] claim form locker!`);
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

    async closeLocker() {
      try {
        const duration_sec =
          parseInt(this.escrow!.escrowEndsAt.toString()) -
          parseInt(this.escrow!.escrowStartedAt.toString());

        console.log(duration_sec);
        const tx = new Transaction();
        let instruction = undefined;

        // CLAIM

        //for (const era of duration_2_ERAs(duration_sec)) {
        //  instruction = await instruction_claimRewards(era);
        //  if (instruction) {
        //    tx.add(instruction);
        //  }
        //}

        // CLOSE
        instruction = await instruction_proxyExit();
        if (instruction) {
          tx.add(instruction);
        }
        console.log(`[${NAME}] close Locker!`);
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
        const pg_lockedVoter = useWorkspaceAdapter()?.pg_lockedVoter.value;
        const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;

        try {
          this.proxy = (await pg_proxyRewarder?.account.proxy.fetch(
            findProxy()[0],
          )) as never as Proxy;
        } catch (err) {
          this.proxy = undefined;
        }

        try {
          this.proxyEscrow = (await pg_proxyRewarder?.account.proxyEscrow.fetch(
            findProxyEscrow()[0],
          )) as never as ProxyEscrow;
        } catch (err) {
          this.proxyEscrow = undefined;
        }

        try {
          this.escrow = (await pg_lockedVoter?.account.escrow.fetch(
            findEscrow()[0],
          )) as never as Escrow;
        } catch (err) {
          this.escrow = undefined;
        }

        try {
          this.balanceWallet =
            (
              await useRPCStore().connection.getTokenAccountBalance(
                findATA(useWallet().publicKey.value!, POLIS),
              )
            ).value.uiAmountString ?? '0';
        } catch (error) {
          this.balanceWallet = '-';
        }

        try {
          this.balanceSquads =
            (
              await useRPCStore().connection.getTokenAccountBalance(
                findATA(
                  new PublicKey(useSquadsStore().vaultPDA.toString()),
                  POLIS,
                ),
              )
            ).value.uiAmountString ?? '0';
        } catch (error) {
          this.balanceSquads = '-';
        }

        this.balanceLocker = '-';

        console.log(`[${NAME}] updated!`);
      }
    },
  },
});
