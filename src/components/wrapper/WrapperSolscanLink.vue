<script setup lang="ts">
const props = defineProps(['account']);
</script>

<template>
  <q-btn
    :href="`https://solscan.io/account/${props.account}`"
    target="_blank"
    color="primary"
    dense
  >
    <q-avatar size="20px">
      <img src="solscan.png" />
    </q-avatar>
  </q-btn>
</template>

<style scoped lang="sass"></style>
