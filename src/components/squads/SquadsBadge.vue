<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
</script>

<template>
  <q-badge color="" text-color="black">
    <div style="font-size: 12px">
      {{
        useSquadsStore().store.find(
          (s: any) => s.value == useSquadsStore().multisigPDA,
        )?.label
      }}
    </div>
  </q-badge>
</template>

<style scoped lang="sass"></style>
