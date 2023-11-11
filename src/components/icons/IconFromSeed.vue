<script setup lang="ts">
import { minidenticon } from 'minidenticons';
import { ref } from 'vue';

const props = defineProps({
  seed: {
    type: String,
    default: 'default',
  },
});

const icon = ref(minidenticon(props.seed));
</script>

<template>
  <div v-html="icon"></div>
</template>

<style scoped lang="sass"></style>
