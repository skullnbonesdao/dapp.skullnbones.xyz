<script setup lang="ts">
import { computed } from 'vue';
import { formatNumber } from 'src/functions/formatNumber';

const props = defineProps(['number', 'decimals', 'padStart']);

const styledNumber = computed(() => {
  // Regular expression to separate leading zeros
  const regex = /^(0+)(.+)/;

  const match = formatNumber(
    props.number,
    props.decimals,
    props.padStart,
  ).match(regex);

  if (match) {
    const leadingZeros = match[1]; // Group 1: Leading zeros
    const rest = match[2]; // Group 2: The rest of the number

    // Return HTML string with spans
    return `
          <div class="row" >
          <span class="text-weight-thin">${leadingZeros}</span>
          <span class="text-weight-bold">${rest}</span>
          </div>
        `;
  }

  // If no leading zeros, return the number wrapped in a default class
  return `<span class="rest">${props.number}</span>`;
});
</script>

<template>
  <div v-html="styledNumber"></div>
</template>

<style scoped lang="sass"></style>
