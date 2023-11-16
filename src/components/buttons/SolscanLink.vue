<script setup lang="ts">
import { format_address } from '../../functions/format_address';

const props = defineProps(['address']);
</script>

<template>
  <q-btn
    square
    flat
    color="secondary"
    size="sm"
    icon="link"
    target="_blank"
    :href="'https://solscan.io/account/' + address"
  >
    <q-icon />
    <div>{{ format_address(address) }}</div>
  </q-btn>
</template>

<style scoped lang="sass"></style>
