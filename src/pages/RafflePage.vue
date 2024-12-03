<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import RaffleCreateRaffle from 'components/raffle/RaffleCreateRaffle.vue';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';

const tab_selected = ref('raffle');

onMounted(async () => {
  await useRaffleStore().updateStore();
});
</script>

<template>
  <q-page class="col bg-black">
    <div class="row shadow-2">
      <q-tabs
        v-model="tab_selected"
        no-caps
        outside-arrows
        mobile-arrows
        class="col bg-dark"
      >
        <q-tab name="raffle" label="Raffle" />
        <q-tab name="create" label="Create" v-if="useGlobalStore().is_admin" />
        <q-tab name="manage" label="Manage" v-if="useGlobalStore().is_admin" />
      </q-tabs>
      <q-btn
        flat
        class="bg-dark"
        icon="refresh"
        @click="useRaffleStore().updateStore()"
      />
    </div>

    <div class="">
      <div
        v-if="tab_selected === 'raffle' && useRaffleStore().raffles.length == 0"
        class="row"
      >
        <q-space />
        <q-spinner-cube class="row" color="primary" size="10rem" />
        <q-space />
      </div>
      <RaffleGrid
        :raffles="useRaffleStore().getRunningRaffles"
        :is_admin="false"
        v-if="tab_selected === 'raffle' && useRaffleStore().raffles.length > 0"
      />
      <div class="row justify-center" v-if="tab_selected === 'create'">
        <RaffleCreateRaffle class="q-mt-xl" />
      </div>

      <RaffleGrid
        :raffles="useRaffleStore().raffles"
        :is_admin="useGlobalStore().is_admin"
        v-if="tab_selected === 'manage'"
      />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
