<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { format_address } from 'src/functions/format_address';
</script>

<template>
  <q-card square flat class="squads-buttons">
    <q-toggle
      :label="
        'Squad: ' + format_address(useSquadsStore().getVaultPDA.toString(), 3)
      "
      v-model="useSquadsStore().useSquads"
      checked-icon="check"
      unchecked-icon="clear"
    />
  </q-card>
</template>

<style scoped lang="sass">
.squads-buttons
  background-color: #2d2d2d
  padding: 8px
</style>
