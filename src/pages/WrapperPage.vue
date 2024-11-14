<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ViewGroup from 'components/wrapper/WrapperGroupView.vue';
import ViewWrapper from 'components/wrapper/WrapperView.vue';
import { useWrapperStore } from 'stores/globalWrapper';
import WrapperGroupSelect from 'components/wrapper/WrapperGroupSelect.vue';
import WrapperTable from 'components/wrapper/WrapperTable.vue';

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
          <q-card flat>
            <q-card-section>
              <WrapperGroupSelect />
            </q-card-section>
            <q-card-section>
              <WrapperTable />
            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel name="manage" class="row q-gutter-x-md">
          <ViewGroup class="col-3" />
          <ViewWrapper
            class="col"
            v-if="useWrapperStore().selectedGroup?.account"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
