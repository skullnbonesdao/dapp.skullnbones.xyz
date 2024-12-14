<script setup lang="ts">
import { ref } from 'vue';
import { handleTransaction } from 'src/solana/handleTransaction';
import { Transaction } from '@solana/web3.js';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';

const selected = ref('Create new locker');
const options = ref([
  'Create token accounts',
  'Create new locker',
  'Sync locker',
  'Add tokens to locker',
  'Claim tokens form locker',
  'Withdraw tokens form locker',
]);

const tx = ref<Transaction | undefined>();

const duration_options = ref([
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
const duration_selected = ref(duration_options.value[0]);
const amount_ui = ref();
const expand_locker = ref(false);

async function buildTX() {
  switch (selected.value) {
    case 'Create token accounts':
      tx.value = await usePolisLockerStore().createTokenAccounts();
      break;
    case 'Create new locker':
      tx.value = await usePolisLockerStore().createLocker(
        amount_ui.value,
        duration_selected.value.value,
      );
      break;
    case 'Sync locker':
      tx.value = await usePolisLockerStore().syncLocker();
      break;
    case 'Add tokens to locker':
      tx.value = await usePolisLockerStore().addTokensToLocker(
        amount_ui.value,
        duration_selected.value.value,
        expand_locker.value,
      );
      break;
    case 'Claim tokens form locker':
      tx.value = await usePolisLockerStore().claimLocker();
      break;
    case 'Withdraw tokens form locker':
      tx.value = await usePolisLockerStore().withdrawLocker();
      break;
  }

  await handleTransaction(tx.value!, `[PolisLocker] ${selected.value}`);
  tx.value = undefined;
}
</script>

<template>
  <q-card flat bordered square>
    <q-card-section>
      <div class="text-h5">Instructions</div>
      <div class="text-subtitle2 text-weight-light">
        Build and invoke instructions...
      </div>
    </q-card-section>

    <q-separator />
    <q-card-section>
      <q-select
        label="Action"
        square
        filled
        v-model="selected"
        :options="options"
      />
      <div v-if="selected == 'Create new locker'" class="row">
        <q-select
          class="col"
          square
          filled
          label="Duration"
          v-model="duration_selected"
          :options="duration_options"
        />
        <q-input class="col" square filled label="Amount" v-model="amount_ui" />
      </div>

      <div v-if="selected == 'Add tokens to locker'" class="row">
        <q-select
          v-if="expand_locker"
          class="col"
          square
          filled
          label="Duration"
          v-model="duration_selected"
          :options="duration_options"
        />

        <q-input class="col" square filled label="Amount" v-model="amount_ui" />
      </div>

      <q-btn
        @click="buildTX"
        label="Build"
        color="primary"
        class="full-width q-ma-md"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
