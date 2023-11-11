<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';

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
    <div v-if="raffles">
      <RaffleGrid :raffles="raffles" :is_admin="is_admin" />
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
