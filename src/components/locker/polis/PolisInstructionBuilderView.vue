<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { handleTransaction } from 'src/solana/handleTransaction';
import { Transaction } from '@solana/web3.js';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import { POLIS_DECIMALS } from 'src/solana/staratlas/locker/polis/consts';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { duration_2_ERAs } from 'src/solana/staratlas/locker/polis/SnapshotsInterface';

const selected = ref('Create new locker');
const options = ref([
  'Create token accounts',
  'Prepare locker accounts',
  'Create new locker',
  'Sync locker',
  'Add tokens to locker',
  'Claim tokens from locker',
  'Close locker',
]);

const tx = ref<Transaction | undefined>();

const custom_recipient_address = ref(getSigner().toString());
const custom_recipient_amount = ref(0);

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

const ERAs = ref<number[]>([]);

function removeERA(index: number) {
  ERAs.value.splice(index, 1);
}
function addERA() {
  ERAs.value.push(ERAs.value[ERAs.value.length - 1] + 1);
}

watch(
  () => usePolisLockerStore().escrow,
  () => {
    ERAs.value = duration_2_ERAs(
      parseInt(usePolisLockerStore().escrow!.escrowEndsAt.toString()) -
        parseInt(usePolisLockerStore().escrow!.escrowStartedAt.toString()),
    );
  },
);

async function buildTX() {
  switch (selected.value) {
    case 'Create token accounts':
      tx.value = await usePolisLockerStore().createTokenAccounts();
      break;
    case 'Prepare locker accounts':
      tx.value = await usePolisLockerStore().prepareLocker();
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
    case 'Claim tokens from locker':
      tx.value = await usePolisLockerStore().claimLocker(
        custom_recipient_address.value,
        custom_recipient_amount.value,
        ERAs.value,
      );
      break;
    case 'Close locker':
      tx.value = await usePolisLockerStore().closeLocker(
        custom_recipient_address.value,
        custom_recipient_amount.value,
      );
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

      <div
        v-if="['Claim tokens from locker', 'Close locker'].includes(selected)"
        class="col"
      >
        <q-card
          flat
          bordered
          square
          class="q-my-sm"
          v-if="['Claim tokens from locker'].includes(selected)"
        >
          <div class="text-subtitle1 text-center">ERAs</div>
          <q-separator />
          <q-card-section>
            <q-list dense class="full-width">
              <q-item
                v-for="(item, index) in ERAs"
                :key="index"
                class="q-gutter-x-sm"
              >
                <q-input
                  class="full-width"
                  square
                  dense
                  filled
                  v-model="ERAs[index]"
                  type="number"
                />
                <q-btn
                  dense
                  color="primary"
                  icon="delete"
                  @click="removeERA(index)"
                />
              </q-item>
            </q-list>
            <q-item class="row">
              <q-space />
              <q-btn
                dense
                icon="add"
                class=""
                color="primary"
                @click="addERA"
              ></q-btn>
            </q-item>
          </q-card-section>
        </q-card>
        <q-input
          class="col"
          square
          filled
          :label="'$POLIS recipient'"
          v-model="custom_recipient_address"
        />
        <q-input
          v-if="custom_recipient_address != getSigner().toString()"
          square
          filled
          type="number"
          label="
            Amount
          "
          v-model="custom_recipient_amount"
        />
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
