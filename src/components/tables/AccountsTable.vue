<script setup lang="ts">
import { ref } from 'vue';
import { format_address } from 'src/functions/format_address';

const props = defineProps(['accounts']);

const columns = ref([
  {
    name: 'mint',
    required: true,
    label: 'Mint',
    align: 'left',
    field: 'mint',
    field: (row) => format_address(row.mint?.toString() ?? ''),
    sortable: true,
  },
  {
    name: 'calories',
    align: 'right',
    label: 'Amount',
    field: (row) => row.tokenAmount.uiAmount,
    sortable: true,
  },
]);
</script>

<template>
  <q-table
    class="col"
    title="Accounts"
    :rows="accounts?.value?.map((a) => a.account.data.parsed.info)"
    :columns="columns"
    row-key="mint"
    hide-bottom
    flat
  />
</template>

<style scoped lang="sass"></style>
