<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';

const raffles = ref();
const tab_selected = ref('raffle');

// initWorkspaceRaffle();
// initWorkspaceAdapter();
initWorkspaceAdapter();

onMounted(async () => {
  await useGlobalStore().update_wallet_accounts();

  const { pg_raffle } = useWorkspaceAdapter();
  raffles.value = await pg_raffle.value.account.raffle.all();
});
</script>

<template>
  <q-page class="col items-center justify-evenly">
    <q-tabs
      v-model="tab_selected"
      no-caps
      outside-arrows
      mobile-arrows
      class="shadow-2"
    >
      <q-tab name="raffle" label="Raffle" />
      <q-tab name="admin" label="Admin" />
    </q-tabs>

    <div v-if="raffles">
      <RaffleGrid
        :raffles="raffles.filter((raffle) => raffle.account.isRunning === true)"
        v-if="tab_selected === 'raffle'"
      />
      <RaffleGrid
        :raffles="raffles"
        :is_admin="true"
        v-if="tab_selected === 'admin'"
      />
    </div>
    <h6
      v-if="tab_selected === 'raffle' && !raffles?.length"
      class="text-center"
    >
      No Raffles Found
    </h6>
  </q-page>
</template>

<style scoped lang="sass"></style>
