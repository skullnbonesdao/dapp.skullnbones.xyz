<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { format_address } from 'src/functions/format_address';
import Apex_TicketsChart from 'components/apexcharts/Apex_TicketsChart.vue';
import { PublicKey } from '@solana/web3.js';

const props = defineProps(['entrants']);

const pagination = ref({
  rowsPerPage: 0,
});

const rows = ref();

const columns = ref([
  {
    name: 'wallet',
    required: true,
    label: 'Wallet',
    align: 'left',
    field: (row: never) => format_address(row.address),
    sortable: true,
  },
  {
    name: 'amount',
    align: 'right',
    label: 'Amount',
    field: 'amount',
    sortable: true,
  },
]);

const dataValue = ref();
const dataLabel = ref();
const isLoading = ref(true);

onMounted(async () => {
  await loadData();
});

watch(
  () => props.entrants,
  async () => {
    await loadData();
  },
);

async function loadData() {
  dataValue.value = props.entrants?.map((e) => e.amount);
  const addresses = props.entrants?.flatMap((e) => new PublicKey(e.address));
  // const resolvedAddresses = await reverseLookupBatch(
  //   useRPCStore().connection as Connection,
  //   addresses,
  // );

  // dataLabel.value = addresses.flatMap((address, idx) => {
  //   if (resolvedAddresses[idx]) return resolvedAddresses[idx];
  //  else return address.toString();
  //});
  dataLabel.value = addresses;

  isLoading.value = false;
}
</script>

<template>
  <q-table
    square
    dense
    class="col"
    title="Tickets"
    :rows="entrants"
    :columns="columns"
    row-key="mint"
    hide-bottom
    flat
    v-model:pagination="pagination"
    :rows-per-page-options="[0]"
  />

  <q-skeleton v-if="isLoading" type="QInput" />
  <Apex_TicketsChart :data_value="dataValue" :data_label="dataLabel" />
</template>

<style scoped lang="sass"></style>
