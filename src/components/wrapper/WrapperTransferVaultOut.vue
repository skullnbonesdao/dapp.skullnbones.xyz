<script setup lang="ts">
import { ref } from 'vue';

const amountToTransfer = ref();
const recipient = ref();
</script>

<template>
  <div class="row">
    <div class="col">
      <q-input
        square
        filled
        class="col"
        v-model="amountToTransfer"
        type="number"
        label="Amount to transfer"
      />
      <q-input
        square
        filled
        class="col"
        v-model="recipient"
        type="text"
        label="recipient"
      />
    </div>
    <q-btn color="primary" label="Send" square />
  </div>
</template>

<style scoped lang="sass"></style>
