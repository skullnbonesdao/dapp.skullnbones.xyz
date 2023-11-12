<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';
import RaffleCreateRaffle from 'components/raffle/RaffleCreateRaffle.vue';

const raffles = ref();
const tab_selected = ref('raffle');
const count = ref(0);

initWorkspaceAdapter();

async function load_raffles() {
  await useGlobalStore().update_wallet_accounts();
  const { pg_raffle } = useWorkspaceAdapter();
  raffles.value = await pg_raffle.value.account.raffle.all();
  count.value++;
}

onMounted(async () => {
  await load_raffles();
});
</script>

<template>
  <q-page class="col">
    <div class="row shadow-2">
      <q-tabs
        v-model="tab_selected"
        no-caps
        outside-arrows
        mobile-arrows
        class="col"
      >
        <q-tab name="raffle" label="Raffle" />
        <q-tab name="create" label="Create" v-if="useGlobalStore().is_admin" />
        <q-tab name="manage" label="Manage" v-if="useGlobalStore().is_admin" />
      </q-tabs>
      <q-btn flat icon="refresh" @click="load_raffles().then(() => {})" />
    </div>

    <div v-if="raffles && !is_loading" class="q-mx-md">
      <RaffleGrid
        :count="count"
        :raffles="raffles.filter((raffle) => raffle.account.isRunning === true)"
        :is_admin="false"
        v-if="tab_selected === 'raffle'"
      />

      <RaffleCreateRaffle v-if="tab_selected === 'create'" />
      <RaffleGrid
        :count="count"
        :raffles="raffles"
        :is_admin="useGlobalStore().is_admin"
        v-if="tab_selected === 'manage'"
      />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
