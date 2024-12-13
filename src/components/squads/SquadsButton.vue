<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import SquadsBadge from 'components/squads/SquadsBadge.vue';
</script>

<template>
  <div class="row">
    <q-toggle
      dense
      label=""
      v-model="useSquadsStore().useSquads"
      checked-icon="check"
      unchecked-icon="clear"
    />
    <div class="col items-center">
      <div class="col text-center">Sign As:</div>
      <SquadsBadge />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
