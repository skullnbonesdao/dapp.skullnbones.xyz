<script setup lang="ts">
import { ref } from 'vue';
import CreateWrapper from 'components/wrapper/CreateWrapper.vue';

const tabSelected = ref('create');
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5">Wrapper Factory</div>
      <div class="text-caption text-grey">
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>
    <q-separator></q-separator>

    <q-tabs
      v-model="tabSelected"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="create" label="Create" />
      <q-tab name="select" label="Select" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tabSelected" animated>
      <q-tab-panel name="create">
        <CreateWrapper />
      </q-tab-panel>

      <q-tab-panel name="select">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
