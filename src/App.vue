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
import { onMounted } from 'vue';
import 'src/css/backgrounds.scss';
import { useRPCStore } from 'stores/rpcStore';
import { useLockerPolisStore } from 'stores/globalLockerPolisStore';

useGlobalStore();
useRPCStore().update_connection();
useWorkspaceAdapter();
initWorkspaceAdapter();

useLockerPolisStore();

useWhitelist();
useRaffleStore();

useQuasar().dark.set(true);

onMounted(async () => {
  await useGlobalStore().load_token_list();
});
</script>
