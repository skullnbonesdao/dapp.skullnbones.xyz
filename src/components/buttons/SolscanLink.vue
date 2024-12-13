<script setup lang="ts">
const props = defineProps(['address']);
</script>

<template>
  <q-btn
    color="primary"
    size="sm"
    icon="link"
    target="_blank"
    :href="'https://solscan.io/account/' + address"
  >
  </q-btn>
</template>

<style scoped lang="sass"></style>
