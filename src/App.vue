<template>
  <router-view />
</template>

<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { useQuasar } from 'quasar';
import { useRaffleStore } from 'stores/globalRaffle';
import { useWhitelist } from 'stores/globalWhitelist';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';
import { onMounted, watch } from 'vue';
import 'src/css/backgrounds.scss';
import { useRPCStore } from 'stores/rpcStore';
import { useLockerPolisStore } from 'stores/globalLockerPolisStore';
import { useWallet } from 'solana-wallets-vue';
import { useAccountStore } from 'stores/globalAccountStore';

useRPCStore();
useRPCStore().update_connection();

useGlobalStore();

useWorkspaceAdapter();
initWorkspaceAdapter();

useLockerPolisStore();

useWhitelist();
useRaffleStore();

useQuasar().dark.set(true);

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useAccountStore().loadAccounts();
  },
);

onMounted(async () => {
  if (useWallet().publicKey.value) await useAccountStore().loadAccounts();

  await useGlobalStore().load_token_list();
  await useWhitelist().update_whitelist();
});
</script>
