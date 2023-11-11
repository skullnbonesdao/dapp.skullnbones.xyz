<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['accounts']);

const columns = ref([
  {
    name: 'mint',
    required: true,
    label: 'Mint',
    align: 'left',
    field: 'mint',
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
