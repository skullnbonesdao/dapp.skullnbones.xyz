<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import * as anchor from '@coral-xyz/anchor';
import { web3 } from '@coral-xyz/anchor';
import {
  Connection,
  PublicKey,
  SystemProgram,
  SYSVAR_INSTRUCTIONS_PUBKEY,
  Transaction,
} from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useRPCStore } from 'stores/rpcStore';
import {
  LOCKER_TOKEN_DECIMALS,
  POLIS,
  useStarAtlasLockerStore,
} from 'stores/globalStarAtlasLockerStore';
import {
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useLockerPolisStore } from 'stores/globalLockerPolisStore';

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);
const ERA = 3;
const AMOUNT = 1.0;
const DURATION = 1212923;

const amount_to_stake = ref(1.0);

const durations_option = ref([
  {
    label: '1 Day',
    value: 1 * 24 * 60 * 60,
  },
  {
    label: '1 Week',
    value: 1 * 7 * 24 * 60 * 60,
  },
  {
    label: '2 Weeks',
    value: 2 * 7 * 24 * 60 * 60,
  },
  {
    label: '1 months',
    value: (1 / 12) * 365 * 24 * 60 * 60,
  },
  {
    label: '3 months',
    value: 0.25 * 365 * 24 * 60 * 60,
  },
  {
    label: '6 months',
    value: 0.5 * 365 * 24 * 60 * 60,
  },
  {
    label: '9 months',
    value: 0.75 * 365 * 24 * 60 * 60,
  },
  {
    label: '1 years',
    value: 1 * 365 * 24 * 60 * 60,
  },
  {
    label: '2 years',
    value: 2 * 365 * 24 * 60 * 60,
  },
  {
    label: '3 years',
    value: 3 * 365 * 24 * 60 * 60,
  },
  {
    label: '4 years',
    value: 4 * 365 * 24 * 60 * 60,
  },
  {
    label: '5 years',
    value: 5 * 365 * 24 * 60 * 60,
  },
]);

const duration = ref(durations_option.value[0]);

onMounted(async () => {
  if (useWallet().publicKey.value) {
    await useLockerPolisStore().init();
  }
});
watch(
  () => useWallet().publicKey.value,
  async () => {
    await useLockerPolisStore().init();
  },
);

async function build_createLocker() {
  const { pg_proxy_rewarder, pg_locked_voter, pg_snapshot } =
    useWorkspaceAdapter();
  const { publicKey, sendTransaction } = useWallet();

  if (!publicKey.value) return;

  const transactions = new Transaction();

  const [proxyEscrow, bump_proxyEscrow] = web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('ProxyEscrow'),
      publicKey.value!.toBuffer(),
    ],
    pg_proxy_rewarder.value.programId,
  );

  const [proxy, bump_proxy] = web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('Proxy'),
      proxyEscrow.toBuffer(),
      publicKey.value!.toBuffer(),
    ],
    pg_proxy_rewarder.value.programId,
  );

  const locker = (await pg_locked_voter.value.account.locker.all())[0]
    .publicKey;

  const [escrow, bump_escrow] = web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('Escrow'),
      locker.toBuffer(),
      proxy.toBuffer(),
    ],
    pg_locked_voter.value.programId,
  );

  const [escrowHistory] = web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('EscrowHistory'),
      escrow.toBuffer(),
      new anchor.BN(ERA).toBuffer('le', 2),
    ],
    pg_snapshot.value.programId,
  );

  // Proxy Rewarder: New Proxy Escrow
  transactions.add(
    await pg_proxy_rewarder.value.methods
      .newProxyEscrow(new anchor.BN(bump_proxyEscrow))
      .accounts({
        escrowOwner: publicKey.value,
        proxyEscrow: proxyEscrow,
        payer: publicKey.value,
        systemProgram: SystemProgram.programId,
      })
      .instruction(),
  );

  // Proxy Rewarder: New Proxy
  transactions.add(
    await pg_proxy_rewarder.value.methods
      .newProxy(new anchor.BN(bump_proxy))
      .accounts({
        proxyEscrow: proxyEscrow,
        proxy: proxy,
        tokenMint: POLIS,
        proxyOwner: publicKey.value,
        systemProgram: SystemProgram.programId,
      })
      .instruction(),
  );

  // Locked Voter: New Escrow
  transactions.add(
    await pg_locked_voter.value.methods
      .newEscrow(new anchor.BN(bump_escrow))
      .accounts({
        locker: locker,
        escrow: escrow,
        escrowOwner: proxy,
        systemProgram: SystemProgram.programId,
      })
      .instruction(),
  );

  //Create ATA_Proxy
  const [ATA_proxy] = web3.PublicKey.findProgramAddressSync(
    [proxy.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  transactions.add(
    createAssociatedTokenAccountInstruction(
      publicKey.value,
      ATA_proxy,
      proxy,
      POLIS,
    ),
  );

  //Create ATA_Escrow
  const [ATA_escrow] = web3.PublicKey.findProgramAddressSync(
    [escrow.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  transactions.add(
    createAssociatedTokenAccountInstruction(
      publicKey.value,
      ATA_escrow,
      escrow,
      POLIS,
    ),
  );

  //Snapshots: Create Escrow History
  transactions.add(
    await pg_snapshot.value.methods
      .createEscrowHistory(ERA)
      .accounts({
        escrow: escrow,
        escrowHistory: escrowHistory,
        payer: publicKey.value,
        systemProgram: SystemProgram.programId,
      })
      .instruction(),
  );

  //Proxy Rewarder: Proxy Lock
  const [userTokenAccount] = web3.PublicKey.findProgramAddressSync(
    [publicKey.value.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  const [proxyTokenAccount] = web3.PublicKey.findProgramAddressSync(
    [proxy.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  const [escrowTokenAccount] = web3.PublicKey.findProgramAddressSync(
    [escrow.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );

  const whitelistEntry = (
    await pg_locked_voter.value.account.lockerWhitelistEntry.all()
  )[0].publicKey;

  const registeredLocker = (
    await pg_proxy_rewarder.value.account.registeredLocker.all()
  )[0].publicKey;

  transactions.add(
    await pg_proxy_rewarder.value.methods
      .proxyLock(new anchor.BN(AMOUNT), new anchor.BN(DURATION))
      .accounts({
        locker: locker,
        escrow: escrow,
        userTokenAccount: userTokenAccount,
        proxyTokenAccount: proxyTokenAccount,
        escrowTokenAccount: escrowTokenAccount,
        proxy: proxy,
        payer: publicKey.value,
        lockedVoterProgram: pg_locked_voter.value.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        instructionsSysvar: SYSVAR_INSTRUCTIONS_PUBKEY,
        whitelistEntry: whitelistEntry,
        registeredLocker: registeredLocker,
      })
      .instruction(),
  );

  //Snapshots: Sync

  console.log(await pg_snapshot.value.account.lockerHistory.all());
  const lockerHistory = (
    await pg_snapshot.value.account.lockerHistory.all()
  ).find((lh) => lh.account.era == ERA).publicKey;

  transactions.add(
    await pg_snapshot.value.methods
      .sync()
      .accounts({
        locker: locker,
        escrow: escrow,
        lockerHistory: lockerHistory,
        escrowHistory: escrowHistory,
      })
      .instruction(),
  );

  console.log(transactions);

  const signature = await sendTransaction(
    transactions,
    useRPCStore().connection as Connection,
  );
  console.log('some....');
}
</script>

<template>
  <div class="text-h1 text-red">!Under construction!</div>

  <q-card flat>
    <q-card-section>
      <div class="row">
        <div class="col-1">
          <q-img src="/currencies/POLIS.webp" />
        </div>
        <q-separator class="q-mx-sm" vertical />
        <div class="col">
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Squads Vault Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useLockerPolisStore().vaultPDA }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Escrow Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useLockerPolisStore().lockerFactory?.escrow }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Locker Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useLockerPolisStore().lockerFactory?.locker }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Proxy Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useLockerPolisStore().lockerFactory?.proxy }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Proxy Escrow Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useLockerPolisStore().lockerFactory?.proxyEscrow }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h4">Instruction</div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="col text-h6">1. Initialize</div>

          <div class="text-subtitle2 text-weight-light">
            Instruction will initialize the ATA token accounts
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useLockerPolisStore().make_createATAs()"
          ></q-btn>
        </div>
      </div>
      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="text-h6">2. Setup</div>
          <div class="text-subtitle2 text-weight-light">
            Instruction will create a new locker instance
          </div>
        </div>

        <div class="col-4">
          <q-select
            filled
            v-model="duration"
            :options="durations_option"
            label="Standard"
          />
          <q-input
            dense
            square
            class="col"
            standout
            type="number"
            v-model="amount_to_stake"
            label="Amount to stake"
          />
          <q-btn
            class="full-width"
            square
            label="Sign"
            color="primary"
            @click="
              useLockerPolisStore().make_createLocker(
                duration?.value ?? 0,
                amount_to_stake * Math.pow(10, 8),
              )
            "
          ></q-btn>
        </div>
      </div>
      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="text-h6">Stake Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will stake additional tokens
          </div>
        </div>
        <div class="col-4">
          <div class="">
            <q-input
              dense
              square
              class="col"
              standout
              type="number"
              v-model="amount_to_stake"
              label="Amount to stake"
            />
            <q-btn
              class="full-width"
              square
              label="Sign"
              color="primary"
              @click="
                useStarAtlasLockerStore().build_StakeTokens(amount_to_stake)
              "
            ></q-btn>
          </div>
        </div>
      </div>

      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="col text-h6">Harvest</div>

          <div class="text-subtitle2 text-weight-light">
            This instruction will claim your rewards
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_harvestRewards()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="text-h6">Unstake Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will initiate unstake of all tokens
          </div>
        </div>
        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_unstakeTokens()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="text-h6">Cancel Unstake?</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will cancel unstake of all tokens
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_cancelUnstake()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-ma-md">
        <div class="col">
          <div class="text-h6">Withdraw Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will withdraw of all tokens after unstake
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_withdrawTokens()"
          ></q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <q-separator class="q-my-sm" />

      <div class="row items-center">
        <div class="col-1 text-h5">Locker Info</div>
        <q-separator class="q-mx-sm" vertical />
        <div
          class="col"
          v-if="useStarAtlasLockerStore().stakingAccountAtlasInfo"
        >
          <div
            class="row q-pr-md items-center"
            v-for="(key, idx) in Object.keys(
              useStarAtlasLockerStore().stakingAccountAtlasInfo,
            )"
            :key="idx"
          >
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>{{ key }}</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div
                v-if="
                  [
                    'totalStake',
                    'activeStake',
                    'paidRewards',
                    'pendingRewards',
                  ].includes(key)
                "
              >
                {{
                  parseInt(
                    useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                  ) * Math.pow(10, -LOCKER_TOKEN_DECIMALS)
                }}
              </div>
              <div
                v-else-if="
                  [
                    'stakedAtTs',
                    'lastPendingRewardCalcTs',
                    'lastHarvestTs',
                    'unstakedTs',
                  ].includes(key)
                "
              >
                <div
                  v-if="
                    parseInt(
                      useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                    ) == 0
                  "
                >
                  -
                </div>
                <div v-else>
                  {{
                    new Date(
                      parseInt(
                        useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                      ) * 1000,
                    ).toLocaleString()
                  }}
                </div>
              </div>
              <div v-else>
                {{ useStarAtlasLockerStore().stakingAccountAtlasInfo[key] }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-subtitle2 text-center">No Locker found!</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
