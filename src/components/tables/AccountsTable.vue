<script setup lang="ts">
import { ref } from 'vue';
import { format_address } from 'src/functions/format_address';
import { useGlobalStore } from 'stores/globalStore';

const props = defineProps(['accounts']);

const pagination = ref({
  rowsPerPage: 0,
});

const columns = ref([
  {
    name: 'mint',
    required: true,
    label: 'Mint',
    align: 'left',
    field: 'mint',
    field: (row: never) =>
      useGlobalStore().token_list.find((t) => t.address == row.mint?.toString())
        ?.name ?? '',
    sortable: true,
  },
  {
    name: 'calories',
    align: 'right',
    label: 'Amount',
    field: (row: never) => row.tokenAmount.uiAmount,
    sortable: true,
  },
]);
</script>

<template>
  <q-table
    dense
    bordered
    class="col"
    title="Accounts"
    :rows="accounts?.value?.map((a) => a.account.data.parsed.info)"
    :columns="columns"
    row-key="mint"
    hide-bottom
    flat
    v-model:pagination="pagination"
    :rows-per-page-options="[0]"
  />
</template>

<style scoped lang="sass"></style>
