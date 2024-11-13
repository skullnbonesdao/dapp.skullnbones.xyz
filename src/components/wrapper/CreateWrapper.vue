<script setup lang="ts">
import { ref } from 'vue';

const mintUnwrapped = ref();
const ratioUnwrapped = ref(1);
const ratioWrapped = ref(1);
</script>

<template>
  <q-card flat>
    <q-card-section class="">
      <div class="text-h6">Token <to></to> wrap</div>
      <div class="row q-gutter-x-md items-center">
        <q-select
          filled
          class="col"
          v-model="mintUnwrapped"
          label="Mint"
          type="number"
        />
      </div>
    </q-card-section>

    <q-card-section class="">
      <div class="text-h6">Ratio</div>
      <div class="row q-gutter-x-md items-center">
        <q-input
          filled
          class="col"
          v-model="ratioUnwrapped"
          label="Unwrapped"
          type="number"
        />
        <q-icon name="swap_horiz" size="xl  " />
        <q-input
          filled
          class="col"
          v-model="ratioWrapped"
          label="Wrapped"
          type="number"
        />
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn class="full-width" color="primary" label="Create"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
