<script setup lang="ts">
import { ref, watch } from 'vue';
import { handleTransaction } from 'src/solana/handleTransaction';
import { Transaction } from '@solana/web3.js';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';

const options = ref(['Create staking account', 'Add tokens to locker']);
const selected = ref(options.value[0]);

const tx = ref<Transaction | undefined>();

const amount_ui = ref();
const expand_locker = ref(false);

async function buildTX() {
  switch (selected.value) {
    case 'Create staking account':
      tx.value = await useAtlasLockerStore().createStakingAccount();
      break;

    case 'Add tokens to locker':
      tx.value = await useAtlasLockerStore().stakeTokens(amount_ui.value);
      break;
  }

  await handleTransaction(tx.value!, `[Atlas Locker] ${selected.value}`);
  tx.value = undefined;
}
</script>

<template>
  <q-card flat bordered square>
    <q-card-section>
      <div class="text-h6">Instructions</div>
      <div class="text-subtitle2">Build and invoke instructions...</div>
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
