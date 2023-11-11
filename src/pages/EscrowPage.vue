<script setup lang="ts">
import { ref } from 'vue';
import CreateEscrow from 'components/escrow/CreateEscrow.vue';

const selected_tab = ref('create');
</script>

<template>
  <q-page class="col text-center q-ma-md q-gutter-y-md">
    <div class="text-h3">ESCROW</div>
    <q-card dark>
      <q-tabs v-model="selected_tab" dense class="text-white" align="justify">
        <q-tab name="create" label="Create" />
        <q-tab name="exchange" label="Exchange" />
        <q-tab name="cancel" label="Cancel " />
      </q-tabs>

      <q-separator />

      <q-tab-panels dark v-model="selected_tab" animated>
        <q-tab-panel name="create">
          <CreateEscrow />
        </q-tab-panel>

        <q-tab-panel name="exchnage">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="cancel">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
