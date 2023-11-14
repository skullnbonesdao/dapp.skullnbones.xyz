<template>
  <router-view />
</template>

<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { useQuasar } from 'quasar';
import { useRaffleStore } from 'stores/globalRaffle';
import { useWhitelist } from 'stores/globalWhitelist';
import { initWorkspaceAdapter } from 'src/idls/adapter/apapter';

useGlobalStore();
useGlobalStore().update_connection();

initWorkspaceAdapter();

useWhitelist();
useRaffleStore();

useQuasar().dark.set(true);
</script>
