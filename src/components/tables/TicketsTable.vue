<script setup lang="ts">
import { computed, ref } from 'vue';
import { format_address } from 'src/functions/format_address';
import { useGlobalStore } from 'stores/globalStore';

const props = defineProps(['entrads']);
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
    bordered
    class="col"
    title="Tickets"
    :rows="entrads"
    :columns="columns"
    row-key="mint"
    hide-bottom
    flat
    v-model:pagination="pagination"
    :rows-per-page-options="[0]"
  />
</template>

<style scoped lang="sass"></style>
