<script setup lang="ts">
import { useWrapperStore } from 'stores/globalWrapper';
</script>

<template>
  <q-card
    v-if="useWrapperStore().selectedFactory?.account"
    flat
    bordered
    style="max-width: 1000px"
  >
    <q-card-section class="">
      <div class="text-h4">Info</div>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div class="row">
        <div class="col">Publickey</div>
        <div>{{ useWrapperStore().selectedFactory.publicKey }}</div>
      </div>
      <div
        v-for="info in Object.keys(useWrapperStore().selectedFactory?.account)"
        :key="info"
        class="row"
      >
        <div class="col">{{ info.toUpperCase() }}</div>
        <div>{{ useWrapperStore().selectedFactory.account[info] }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
