<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRPCStore } from 'stores/rpcStore';
import { PublicKey } from '@solana/web3.js';
import { findVaultAddress } from 'src/solana/wrapper/WrapperInterface';

const props = defineProps(['wrapper']);

const total = ref(0);
const vault = ref(0);

async function load() {
  total.value = (await getTotalSupply()) * props.wrapper.account.ratio[0] ?? 0;
  vault.value = (await getBalance()) * props.wrapper.account.ratio[1] ?? 0;
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

const data = computed(() => {
  return [vault.value, total.value];
});

const options = ref({
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: 'white',
    },
    show: true,
    position: 'bottom',
  },
  theme: {
    palette: 'palette3', // upto palette10
  },
  labels: ['Vault', 'Circ. Supply'],
});
</script>

<template>
  <apexchart height="200px" type="donut" :options="options" :series="data" />
</template>
