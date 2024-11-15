<script setup lang="ts">
import { useWrapperStore } from 'stores/globalWrapper';
</script>

<template>
  <q-card
    v-if="useWrapperStore().selectedFactory?.account"
    flat
    bordered
    style="width: 500px"
  >
    <q-card-section class="">
      <div class="text-h4">Info</div>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div class="col">
        <div class="col text-subtitle1 text-weight-thin">Publickey</div>
        <div>{{ useWrapperStore().selectedFactory.publicKey }}</div>
      </div>
      <div
        v-for="info in Object.keys(useWrapperStore().selectedFactory?.account)"
        :key="info"
        class="col"
      >
        <div class="col text-subtitle1 text-weight-thin">
          {{ info.toUpperCase() }}
        </div>
        <div class="text-subtitle2" v-if="info == 'ratio'">
          {{ useWrapperStore().selectedFactory.account[info][0] }} :
          {{ useWrapperStore().selectedFactory.account[info][1] }}
        </div>
        <div class="text-subtitle2" v-else>
          {{ useWrapperStore().selectedFactory.account[info] }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
