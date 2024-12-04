<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { format_address } from 'src/functions/format_address';
import Apex_TicketsChart from 'components/apexcharts/Apex_TicketsChart.vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { PublicKey } from '@solana/web3.js';

const props = defineProps(['raffle', 'ticketsAccount']);

const pagination = ref({
  rowsPerPage: 0,
});
const tickets = ref();

onMounted(async () => {
  console.log(props.raffle);
  await loadTickets();
});

watch(
  () => props.ticketsAccount,
  async () => {
    await loadTickets();
    await loadData();
  },
);

async function loadTickets() {
  if (!props.ticketsAccount) return;

  const { pg_raffle } = useWorkspaceAdapter();

  const accountInfo = await pg_raffle.value.account.tickets.getAccountInfo(
    props.raffle.account.tickets,
  );

  let wallets: PublicKey[] = [];

  for (let i = 0; i < props.ticketsAccount.total; i++) {
    let bytes = getEntrant(accountInfo.data, i);
    wallets.push(bytes);
  }

  const walllet_strings = wallets.map((w) => w.toString());

  const array = walllet_strings.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value]: (accumulator[value] || 0) + 1,
    };
  }, {});

  tickets.value = Object.entries(array).flatMap((e) => {
    return {
      address: e[0],
      amount: e[1],
    };
  });
}

function getEntrant(entrantsData: Uint8Array[], index: number): PublicKey {
  const startIndex: number = 8 + 4 + 4 + 32 * index;
  const endIndex: number = startIndex + 32;

  // Assuming entrantsData is a Uint8Array, create a slice from start to end index
  const slice = entrantsData.slice(startIndex, endIndex);

  // Call the Pubkey.new method with the slice

  return new PublicKey(slice);
}

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

async function loadData() {
  dataValue.value = tickets.value?.map((e) => e.amount);
  const addresses = tickets.value?.flatMap((e) => format_address(e.address));
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
    :rows="tickets"
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
