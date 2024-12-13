<script setup lang="ts">
import { PublicKey } from '@solana/web3.js';
import { onMounted, ref } from 'vue';
import { useRPCStore } from 'stores/rpcStore';

const props = defineProps(['accountExists']);
</script>

<template>
  <q-avatar
    v-if="accountExists"
    icon="check"
    color="primary"
    text-color="white"
  />
  <q-avatar v-else icon="close" color="red" text-color="white" />
</template>

<style scoped lang="sass"></style>
