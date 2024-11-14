<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ViewGroup from 'components/wrapper/GroupView.vue';
import ViewWrapper from 'components/wrapper/WrapperView.vue';
import { useWrapperStore } from 'stores/globalWrapper';

const tabSelected = ref('manage');

onMounted(async () => {
  await useWrapperStore().load_groups();
  await useWrapperStore().load_wrapper();
});
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
          <ViewGroup />
          <ViewWrapper />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
