<script setup lang="ts">
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps(['mint']);
</script>

<template>
  <div class="row">
    <div class="col">Wallet-Balance:</div>
    <FormatNumber
      :number="useAccountStore().getAccountByMintPublicKey(mint)?.uiAmount"
      :decimals="4"
      :pad-start="10"
    />
  </div>
</template>

<style scoped lang="sass"></style>
