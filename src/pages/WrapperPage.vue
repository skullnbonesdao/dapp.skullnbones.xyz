<script setup lang="ts">
import { ref } from 'vue';
import ViewWrapper from 'components/wrapper/ViewWrapper.vue';
import ViewSubscription from 'components/wrapper/ViewGroup.vue';

const tabSelected = ref('wrapping');
</script>

<template>
  <q-page class="bg-black">
    <q-card>
      <q-tabs
        v-model="tabSelected"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="wrapping" label="Wrapping" />
        <q-tab name="manage" label="Manage" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tabSelected" animated>
        <q-tab-panel name="wrapping">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="manage" class="q-gutter-y-md">
          <ViewSubscription />
          <ViewWrapper />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
