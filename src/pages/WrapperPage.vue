<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import WrapperGroupView from 'components/wrapper/WrapperGroupView.vue';
import WrapperManage from 'components/wrapper/WrapperManage.vue';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import WrapperGroupSelect from 'components/wrapper/WrapperGroupSelect.vue';
import WrapperTable from 'components/wrapper/WrapperTable.vue';
import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/solana/connector';

const tabSelected = ref('wrapping');

useWrapperStore();

watch(
  () => useWrapperStore().enableManage,
  () => {
    if (!useWrapperStore().enableManage) tabSelected.value = 'wrapping';
  },
);

onMounted(async () => {
  if (!useWorkspaceAdapter()) initWorkspaceAdapter();
  await useWrapperStore().updateStore();
});
</script>

<template>
  <q-page class="bg-black">
    <q-card>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="inventory_2" size="md" />
        <div class="col text-h6">Token Wrapper Interface</div>
        <q-toggle
          dense
          left-label
          label="Enable Management"
          v-model="useWrapperStore().enableManage"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </q-card-section>
      <q-separator />
      <q-tabs
        v-if="useWrapperStore().enableManage"
        v-model="tabSelected"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="wrapping" label="Wrap / Unwrap" />
        <q-tab name="manage" label="Manage" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tabSelected" animated>
        <q-tab-panel name="wrapping">
          <div class="row">
            <WrapperGroupSelect as-tabs="true" class="col" />
          </div>
          <WrapperTable />
        </q-tab-panel>

        <q-tab-panel name="manage" class="row q-gutter-x-md">
          <WrapperGroupView class="col-3" />

          <WrapperManage
            class="col"
            v-if="useWrapperStore().groupSelected?.account"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
