<script setup lang="ts">
import { useWrapperStore } from 'stores/globalWrapper';
</script>

<template>
  <q-select
    label="Select a group"
    square
    filled
    v-model="useWrapperStore().selectedGroup"
    :options="useWrapperStore().groups"
    :option-label="(option) => option?.account?.name"
  ></q-select>
</template>

<style scoped lang="sass"></style>
