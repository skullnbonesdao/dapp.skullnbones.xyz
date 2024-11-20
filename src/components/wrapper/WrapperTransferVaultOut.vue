<script setup lang="ts">
import { ref } from 'vue';

const amountToTransfer = ref();
const recipient = ref();

const enableTransfer = ref(false);
</script>

<template>
  <q-card flat>
    <div class="text-subtitle2 row items-center">
      <q-checkbox v-model="enableTransfer" />
      <div class="text-accent">
        I want to transfer tokens out of the vault to a new address
      </div>
    </div>
    <div class="col">
      <div class="row">
        <q-input
          class="col"
          :disable="!enableTransfer"
          square
          filled
          v-model="recipient"
          type="text"
          label="recipient"
        />
        <q-separator vertical />
        <q-input
          :disable="!enableTransfer"
          square
          filled
          v-model="amountToTransfer"
          type="number"
          label="Amount to transfer"
        />
        <q-btn :disable="!enableTransfer" color="primary" label="Send" square />
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
