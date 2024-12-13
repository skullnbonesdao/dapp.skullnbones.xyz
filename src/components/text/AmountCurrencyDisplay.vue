<script setup lang="ts">
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps({
  currencyName: {
    type: String,
    default: 'ATLAS',
  },
  decimals: {
    default: 5,
  },
  padStart: {
    default: 10,
  },
  number: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="row q-gutter-x-xs">
    <q-avatar size="xs">
      <img :src="`currencies/${currencyName}.webp`" />
    </q-avatar>
    <FormatNumber
      :decimals="decimals"
      :pad-start="padStart"
      :number="parseFloat(number)"
    />
  </div>
</template>

<style scoped lang="sass"></style>
