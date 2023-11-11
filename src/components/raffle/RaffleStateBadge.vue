<script setup lang="ts">
const props = defineProps(['raffle', 'entrants']);
</script>

<template>
  <q-badge
    color="cyan"
    v-if="raffle.account.isClaimed"
    class="text-caption text-md"
  >
    ready-to-close
  </q-badge>
  <q-badge
    color="yellow"
    v-else-if="raffle.account.isRunning && raffle.account.randomness"
    class="text-caption text-md text-black"
  >
    claimable
  </q-badge>
  <q-badge
    color="orange"
    v-else-if="raffle.account.isRunning && entrants?.total == entrants?.max"
    >...waiting for draw</q-badge
  >

  <q-badge
    color="green"
    v-else-if="raffle.account.isRunning"
    class="text-caption text-md"
  >
    running {{ entrants?.total }} / {{ entrants?.max }}
  </q-badge>
</template>

<style scoped lang="sass"></style>
