<script setup lang="ts">
import { ref } from 'vue';
import CreateGroup from 'components/wrapper/CreateGroup.vue';

const tabSelected = ref('create');
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5">Group</div>
      <div class="text-caption text-grey">
        The group will be used to filter the wrappers - one time creation fee of
        0.5 SOL
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
        <CreateGroup />
      </q-tab-panel>

      <q-tab-panel name="select">
        <q-select filled model-value=""></q-select>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
