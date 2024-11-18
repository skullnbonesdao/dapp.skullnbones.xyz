<script setup lang="ts">
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
</script>

<template>
  <q-card
    v-if="useWrapperStore().wrapperSelected?.account"
    flat
    bordered
    style="width: 450px"
  >
    <q-card-section class="">
      <div class="text-h4">Info</div>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div class="col">
        <div class="col text-subtitle1 text-weight-thin">Publickey</div>
        <div class="text-subtitle2">
          {{ useWrapperStore().wrapperSelected.publicKey }}
        </div>
      </div>
      <div
        v-for="info in Object.keys(useWrapperStore().wrapperSelected?.account)"
        :key="info"
        class="col"
      >
        <div class="col text-subtitle1 text-weight-thin">
          {{ info.toUpperCase() }}
        </div>
        <div class="text-subtitle2" v-if="info == 'ratio'">
          {{ useWrapperStore().wrapperSelected.account[info][0] }} :
          {{ useWrapperStore().wrapperSelected.account[info][1] }}
        </div>
        <div class="text-subtitle2" v-else>
          {{ useWrapperStore().wrapperSelected.account[info] }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
