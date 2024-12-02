<script setup lang="ts">
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps(['mint']);
</script>

<template>
  <div class="row">
    <div class="col text-caption text-weight-light">Wallet-Balance:</div>
    <FormatNumber
      :class="
        useAccountStore().getAccountByMintPublicKey(mint)?.uiAmount == 0
          ? 'text-red'
          : ''
      "
      :number="useAccountStore().getAccountByMintPublicKey(mint)?.uiAmount"
      :decimals="4"
      :pad-start="10"
    />
  </div>
</template>

<style scoped lang="sass"></style>
