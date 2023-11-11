<script setup lang="ts">
import { ref } from 'vue';
import { WalletMultiButton } from 'solana-wallets-vue';

const show_modal = ref(true);
</script>

<template>
  <div class="q-pb-xs">
    <WalletMultiButton class="" dark></WalletMultiButton>
  </div>
</template>

<style scoped lang="sass"></style>
