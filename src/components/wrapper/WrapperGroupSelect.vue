<script setup lang="ts">
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
</script>

<template>
  <q-select
    label="Select a group"
    square
    filled
    @update:model-value="() => (useWrapperStore().wrapperSelected = undefined)"
    v-model="useWrapperStore().groupSelected"
    :options="useWrapperStore().groups"
    :option-label="(option) => option?.account?.name"
  ></q-select>
</template>

<style scoped lang="sass"></style>
