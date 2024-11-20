<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
</script>

<template>
  <q-card square flat class="squads-buttons">
    <q-toggle label="Sign as squads?" v-model="useSquadsStore().useSquads" />
  </q-card>
</template>

<style scoped lang="sass">
.squads-buttons
  background-color: #2d2d2d
  padding: 8px
</style>
