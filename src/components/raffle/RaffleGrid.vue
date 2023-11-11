<script setup lang="ts">
import RaffleCreateCard from 'components/raffle/RaffleCreateRaffle.vue';
import RaffleCard from 'components/raffle/RaffleCard.vue';
import { PropType, ref } from 'vue';

const props = defineProps({
  is_admin: {
    type: Boolean,
    default: false,
  },
  raffles: {
    type: [] as PropType<any>,
    default: [],
  },
});

const raffle = ref();
</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div v-if="is_admin" class="col">
        <RaffleCreateCard />
      </div>
      <div :key="raffle" v-for="raffle in props.raffles" class="col">
        <RaffleCard :is_admin="is_admin" :raffle="raffle" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.example-row-equal-width
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem
</style>
