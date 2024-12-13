<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import * as anchor from '@coral-xyz/anchor';
import { web3 } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';

import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';

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
    await usePolisLockerStore().updateStore();
  }
});
watch(
  () => useWallet().publicKey.value,
  async () => {
    await usePolisLockerStore().updateStore();
  },
);


}*/
</script>

<template>
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
              <div>XXX</div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Escrow Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>XXX</div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Locker Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>XXX</div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Proxy Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>XXX</div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Polis Proxy Escrow Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>XXX</div>
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
          <q-btn class="full-width" label="Sign" color="primary"></q-btn>
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
            label="Signsda"
            color="primary"
            @click="usePolisLockerStore().createLocker()"
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
          <q-btn class="full-width" label="Sign" color="primary"></q-btn>
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
          <q-btn class="full-width" label="Sign" color="primary"></q-btn>
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
          <q-btn class="full-width" label="Sign" color="primary"></q-btn>
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
          <q-btn class="full-width" label="Sign" color="primary"></q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
