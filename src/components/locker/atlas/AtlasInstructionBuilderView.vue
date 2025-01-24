<script setup lang="ts">
import { ref, watch } from 'vue';
import { handleTransaction } from 'src/solana/handleTransaction';
import { Transaction } from '@solana/web3.js';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { POLIS_DECIMALS } from 'src/solana/staratlas/locker/polis/consts';

const options = ref([
  'Create staking account',
  'Add tokens to locker',
  'Claim tokens from locker',
  'Unstake tokens from locker',
  'Cancel unstake tokens from locker',
  'Withdraw tokens from locker',
]);
const selected = ref(options.value[0]);

const tx = ref<Transaction | undefined>();

const custom_recipient_address = ref(getSigner().toString());
const custom_recipient_amount_claim = ref(0);

const custom_recipient_amount_close = ref(
  useAtlasLockerStore().stakingAccountAtlasInfo?.pendingRewards *
    Math.pow(10, -POLIS_DECIMALS),
);

watch(
  () => useAtlasLockerStore().stakingAccountAtlasInfo?.pendingRewards,
  () => {
    custom_recipient_amount_claim.value =
      useAtlasLockerStore().stakingAccountAtlasInfo?.pendingRewards *
      Math.pow(10, -POLIS_DECIMALS);
  },
);

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
    case 'Claim tokens from locker':
      tx.value = await useAtlasLockerStore().claimTokens(
        custom_recipient_address.value,
        custom_recipient_amount_claim.value,
      );
      break;
    case 'Unstake tokens from locker':
      tx.value = await useAtlasLockerStore().unstakeTokens();
      break;
    case 'Cancel unstake tokens from locker':
      tx.value = await useAtlasLockerStore().cancelUnstake();
      break;
    case 'Withdraw tokens from locker':
      tx.value = await useAtlasLockerStore().withdrawTokens(
        custom_recipient_address.value,
        custom_recipient_amount_claim.value,
      );
      break;
  }

  await handleTransaction(tx.value!, `[Atlas Locker] ${selected.value}`);
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
    <q-card-section class="">
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

      <div v-if="selected == 'Claim tokens from locker'" class="row">
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
          v-model="custom_recipient_amount_claim"
        />
      </div>

      <div v-if="selected == 'Withdraw tokens from locker'" class="row">
        <q-input
          class="col"
          square
          filled
          :label="'$ATLAS recipient'"
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
          v-model="custom_recipient_amount_close"
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
