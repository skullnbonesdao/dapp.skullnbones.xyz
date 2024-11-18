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

useRPCStore();
useRPCStore().update_connection();

useGlobalStore();

//New implementation
useWorkspaceAdapter();
initWorkspaceAdapter();

useQuasar().dark.set(true);
</script>
