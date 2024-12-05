<script setup lang="ts">
import { useWhitelistStore } from 'src/solana/whitelist/WhitelistStore';
</script>

<template>
  <q-card square flat class="q-pa-sm bg-transparent">
    <div class="row items-center q-gutter-x-md">
      <div class="text-subtitle2">Whitelisted</div>
      <div class="col">
        <q-badge
          class=""
          :color="
            useWhitelistStore().check_wallet_whitelisted ? 'green' : 'red'
          "
        >
          {{ useWhitelistStore().check_wallet_whitelisted }}
        </q-badge>
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
