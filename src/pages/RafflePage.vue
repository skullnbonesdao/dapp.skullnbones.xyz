<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { useGlobalStore } from 'stores/globalStore';
import RaffleGrid from 'components/raffle/RaffleGrid.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';
import RaffleCreateRaffle from 'components/raffle/RaffleCreateRaffle.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import { useRaffleStore } from 'stores/globalRaffle';
import { useGlobalWalletStore } from 'stores/globalWallet';
import {
  DiscordMessageType,
  handle_discord_webhook,
} from 'components/messages/handle_discord_webhook';
import { evaSearch } from '@quasar/extras/eva-icons';

const tab_selected = ref('raffle');

onMounted(async () => {
  await useGlobalWalletStore().update_accounts();
  if (!useRaffleStore().raffles.length) await useRaffleStore().update_raffles();
});

onBeforeUnmount(() => {
  clearInterval(task_id.value);
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useGlobalWalletStore().update_accounts();
    await useRaffleStore().update_raffles();
  },
);

const task_id = ref();

async function asyncRaffleUpdateJob() {
  await useRaffleStore().update_raffles();
  console.log('Raffles updated!');
}

function scheduleRaffleUpdateJob(interval: number) {
  task_id.value = setInterval(async () => {
    await asyncRaffleUpdateJob();
  }, interval);
}

scheduleRaffleUpdateJob(60000);

watch(
  () => tab_selected.value,
  () => {
    if (tab_selected.value == 'raffle') {
      scheduleRaffleUpdateJob(60000);
    } else {
      clearInterval(task_id.value);
    }
  },
);
</script>

<template>
  <q-page
    v-if="!useWallet().publicKey.value"
    class="row items-center justify-center bg-image"
  >
    <WalletMultiButton dark />
  </q-page>
  <q-page v-else class="col">
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
      <q-btn
        flat
        icon="refresh"
        @click="
          useRaffleStore()
            .update_raffles()
            .then(() => {})
        "
      />
    </div>

    <div v-if="useRaffleStore().is_loading" class="row">
      <q-space />
      <q-spinner-cube class="row" color="primary" size="10rem" />
      <q-space />
    </div>
    <div
      v-if="useRaffleStore().raffles && !useRaffleStore().is_loading"
      class="q-mx-md"
    >
      <RaffleGrid
        :raffles="useRaffleStore().get_running_raffles"
        :is_admin="false"
        v-if="tab_selected === 'raffle'"
      />
      <RaffleCreateRaffle v-if="tab_selected === 'create'" />
      <RaffleGrid
        :raffles="useRaffleStore().raffles"
        :is_admin="useGlobalStore().is_admin"
        v-if="tab_selected === 'manage'"
      />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
