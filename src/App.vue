<template>
  <router-view />
</template>

<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { useQuasar } from 'quasar';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/solana/connector';
import 'src/css/backgrounds.scss';
import { useRPCStore } from 'stores/rpcStore';
import { onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useAccountStore } from 'stores/globalAccountStore';

const init = ref(false);

useRPCStore();
useRPCStore().update_connection();

useGlobalStore();

//New implementation
useWorkspaceAdapter();
initWorkspaceAdapter();

useQuasar().dark.set(true);
onMounted(async () => {
  await useAccountStore().updateStore();

  init.value = true;
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    if (init.value) {
      await useAccountStore().updateStore();
    }
  },
);
</script>
