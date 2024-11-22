<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRPCStore } from 'stores/rpcStore';
import { PublicKey } from '@solana/web3.js';
import { findVaultAddress } from 'src/solana/wrapper/WrapperInterface';
import { watchDeep } from '@vueuse/core';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps(['wrapper']);

const total = ref(0);
const vault = ref(0);
const redeemable = ref(0);

async function load() {
  total.value = (await getTotalSupply()) ?? 0;
  vault.value = (await getBalance()) ?? 0;

  redeemable.value =
    ((total.value * props.wrapper.account.ratio[1]) / total.value) *
    props.wrapper.account.ratio[1] *
    100;
}

async function getTotalSupply() {
  const data = await useRPCStore().connection.getTokenSupply(
    new PublicKey(props.wrapper.account.mintWrapped),
  );

  return data.value.uiAmount;
}

async function getBalance() {
  let vault = findVaultAddress(
    props.wrapper.publicKey,
    props.wrapper.account.mintUnwrapped,
  );

  return (await useRPCStore().connection.getTokenAccountBalance(vault)).value
    .uiAmount;
}

onMounted(async () => {
  await load();
});

watchDeep(
  () => props.wrapper,
  async () => await load(),
);

const data = computed(() => {
  return [redeemable.value];
});

const options = ref({
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: 'white',
    },
    show: false,
    position: 'left',
  },
  theme: {
    palette: 'palette3', // upto palette10
  },
  labels: ['Redeemable' + ''],
});
</script>

<template>
  <div class="row">
    <div class="col">Vault Balance</div>
    <FormatNumber class="" :number="vault" :decimals="4" :pad-start="10" />
  </div>
  <div class="row">
    <div class="col">Circ. Supply</div>
    <FormatNumber :number="total" :decimals="4" :pad-start="10" />
  </div>
  <apexchart
    height="300px"
    type="radialBar"
    :options="options"
    :series="data"
  />
</template>
