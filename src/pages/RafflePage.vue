<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import RaffleCreateRaffle from 'components/raffle/RaffleCreateRaffle.vue';

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

const is_admin = computed(() => {
  return useGlobalStore().admins.some(
    (entry) => entry === useWallet().publicKey.value?.toString(),
  );
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
      <q-tab name="create" label="Create" />
      <q-tab name="manage" label="Manage" />
    </q-tabs>

    <div v-if="raffles">
      <RaffleGrid
        :raffles="raffles.filter((raffle) => raffle.account.isRunning === true)"
        :is_admin="false"
        v-if="tab_selected === 'raffle'"
      />

      <RaffleCreateRaffle v-if="tab_selected === 'create'" />
      <RaffleGrid
        :raffles="raffles"
        :is_admin="is_admin"
        v-if="tab_selected === 'manage'"
      />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
