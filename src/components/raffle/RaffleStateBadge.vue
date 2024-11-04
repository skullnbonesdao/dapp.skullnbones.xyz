<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['raffle', 'tickets']);

const progress = computed(() => {
  return props.tickets?.sold / props.tickets?.total;
});

const enum badgeColorMap {
  'created' = 'orange',
  'ready' = 'orange',
  'paused' = 'pink',
  'full' = 'purple',
  'claimprize' = 'purple',
  'claimtickets' = 'purple',
  'running' = 'primary',
}
</script>

<template>
  <q-linear-progress
    v-if="Object.keys(raffle.account.state)[0] == 'running'"
    size="25px"
    :value="progress"
    color="primary"
  >
    <div class="absolute-full flex flex-center">
      <q-badge
        color="black"
        text-color="primary"
        :label="`Tickets: ${tickets?.sold}/${tickets?.total}`"
      />
    </div>
  </q-linear-progress>

  <q-badge
    v-else
    :color="badgeColorMap[Object.keys(raffle.account.state)[0]]"
    class="text-h6 justify-center full-width"
  >
    {{ Object.keys(raffle.account.state)[0].toUpperCase() }}
  </q-badge>
</template>

<style scoped lang="sass"></style>
