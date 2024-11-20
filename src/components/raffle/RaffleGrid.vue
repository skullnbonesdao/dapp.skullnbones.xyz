<script setup lang="ts">
import RaffleCard from 'components/raffle/RaffleCard.vue';
import { computed, PropType, ref } from 'vue';

const props = defineProps({
  is_admin: {
    type: Boolean,
    default: false,
  },
  raffles: {
    type: [] as PropType<any>,
    default: [],
  },
  count: {
    type: Number,
    default: 0,
  },
});

const rowsPerPageOptions = computed(() => {
  return [0];
});

const pagination = ref({
  rowsPerPage: 0,
});
</script>

<template>
  <q-table
    grid
    :rows="props.raffles"
    row-key="name"
    hide-header
    v-model:pagination="pagination"
    :rows-per-page-options="rowsPerPageOptions"
  >
    <template v-slot:item="props">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <RaffleCard :is_admin="is_admin" :raffle="props.row" />
      </div>
    </template>
  </q-table>
</template>

<style scoped lang="sass"></style>
