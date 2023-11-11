<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['raffle', 'entrants']);

const progress = computed(() => {
  return props.entrants?.total / props.entrants?.max;
});
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

  <q-linear-progress
    v-else-if="raffle.account.isRunning"
    size="25px"
    :value="progress"
    color="primary"
  >
    <div class="absolute-full flex flex-center">
      <q-badge
        color="black"
        text-color="primary"
        :label="`Tickets: ${entrants?.total}/${entrants?.max}`"
      />
    </div>
  </q-linear-progress>
</template>

<style scoped lang="sass"></style>
