<script setup lang="ts">
import { computed, ref } from 'vue';
import { format_address } from 'src/functions/format_address';
import { useGlobalStore } from 'stores/globalStore';

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
</template>

<style scoped lang="sass"></style>
