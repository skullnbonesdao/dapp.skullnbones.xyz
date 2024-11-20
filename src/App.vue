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
import { useWhitelistStore } from 'src/solana/whitelist/WhitelistStore';

const init = ref(false);

useGlobalStore();
useRPCStore();
useWhitelistStore();
useAccountStore();
useWorkspaceAdapter();

useRPCStore().update_connection();

useQuasar().dark.set(true);
onMounted(async () => {
  initWorkspaceAdapter();
  await useAccountStore().updateStore();
  await useWhitelistStore().updateStore();

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
