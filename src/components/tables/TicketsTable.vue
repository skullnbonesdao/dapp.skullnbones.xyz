<script setup lang="ts">
import { ref } from 'vue';
import { format_address } from 'src/functions/format_address';
import Apex_TicketsChart from 'components/apexcharts/Apex_TicketsChart.vue';

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
  <Apex_TicketsChart
    :data_value="entrants?.map((e) => e.amount)"
    :data_label="entrants?.map((e) => format_address(e.address))"
  />
</template>

<style scoped lang="sass"></style>
