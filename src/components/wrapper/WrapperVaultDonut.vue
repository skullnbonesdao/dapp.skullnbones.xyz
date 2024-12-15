<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRPCStore } from 'stores/rpcStore';
import { PublicKey } from '@solana/web3.js';
import { findVaultAddress } from 'src/solana/wrapper/WrapperInterface';
import { watchDeep } from '@vueuse/core';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps(['wrapper']);

const circ = ref(0);
const vault = ref(0);
const percentage = ref(0);

async function load() {
  circ.value = (await getTotalSupply()) ?? 0;
  vault.value = (await getBalance()) ?? 0;

  if (circ.value == 0 && vault.value == 0) {
    percentage.value = 0;
    return;
  }

  if (
    circ.value * props.wrapper.account.ratio[1] ==
    vault.value * props.wrapper.account.ratio[0]
  ) {
    percentage.value = 100;
    return;
  }

  percentage.value = parseInt(
    (
      (circ.value / props.wrapper.account.ratio[1] -
        vault.value / props.wrapper.account.ratio[0]) /
      (vault.value / props.wrapper.account.ratio[0])
    ).toFixed(0),
  );
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
  return [percentage.value];
});

const options = ref({
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
        background: 'rgba(41,52,80,0)',
      },
      track: {
        show: true,
        opacity: 0.1,
      },

      dataLabels: {
        name: {
          offsetY: -10,
          color: '#fff',
          fontSize: '13px',
        },
        value: {
          color: '#fff',
          fontSize: '30px',
          show: true,
        },
      },
    },
  },
  theme: {
    palette: 'palette4', // upto palette10
  },
  stroke: {
    lineCap: 'round',
  },

  labels: ['Redeemable'],
});
</script>

<template>
  {{ circ }}|{{ vault }}|{{ percentage }}
  <div class="row">
    <div class="col">Vault Balance</div>
    <FormatNumber class="" :number="vault" :decimals="4" :pad-start="10" />
  </div>
  <div class="row">
    <div class="col">Circ. Supply</div>
    <FormatNumber :number="circ" :decimals="4" :pad-start="10" />
  </div>
  <apexchart
    height="200px"
    type="radialBar"
    :options="options"
    :series="data"
  />
</template>
