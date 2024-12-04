<script setup lang="ts">
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import FormatNumber from 'components/text/FormatNumber.vue';
import { computed } from 'vue';

const props = defineProps(['mint']);

const icon = computed(() =>
  useAccountStore().getAccountByMintPublicKey(props.mint)
    ? useAccountStore().getAccountByMintPublicKey(props.mint)?.info.logoURI
    : 'unknown.svg',
);
</script>

<template>
  <div class="row items-center q-gutter-x-xs">
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

    <q-avatar size="xs"><img :src="icon" /> </q-avatar>
  </div>
</template>

<style scoped lang="sass"></style>
