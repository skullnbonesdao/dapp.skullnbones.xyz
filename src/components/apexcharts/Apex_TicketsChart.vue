<template>
  <apexchart
    v-if="data_value && data_label"
    height="200px"
    type="donut"
    :options="options"
    :series="data"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['data_value', 'data_label']);

const data = computed(() => {
  if (!props.data_value) return [44, 55, 41, 17, 15];
  else return props.data_value;
});

const options = computed(() => {
  if (!props.data_label)
    return {
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    };
  else
    return {
      legend: {
        labels: {
          colors: 'white',
        },
        position: 'left',
      },
      theme: {
        palette: 'palette3', // upto palette10
      },
      labels: props.data_label,
    };
});
</script>

<style>
/* Optional custom styling */
</style>
