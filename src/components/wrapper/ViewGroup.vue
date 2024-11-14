<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWrapperStore } from 'stores/globalWrapper';
import WrapperCreateGroup from 'components/wrapper/WrapperCreateGroup.vue';
import WrapperCloseGroup from 'components/wrapper/WrapperCloseGroup.vue';

const tabSelected = ref('create');

onMounted(async () => {
  await useWrapperStore().load_groups();
});
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5">Group</div>
      <div class="text-caption text-grey">
        The group will be used to filter the wrappers - one time creation fee of
        0.5 SOL
      </div>
      <div class="text-caption text-orange-5">
        Make sure u use a list where you are the owner!
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
        <WrapperCreateGroup />
      </q-tab-panel>

      <q-tab-panel name="select">
        <q-card flat>
          <q-card-section>
            <div class="row q-gutter-x-md">
              <q-select
                class="col"
                filled
                v-model="useWrapperStore().selectedGroup"
                :options="useWrapperStore().groups"
                :option-label="(option) => option?.account?.name"
              ></q-select>
              <WrapperCloseGroup />
            </div>
            <div
              v-if="useWrapperStore().selectedGroup?.account"
              class="text-caption row"
            >
              Owner:
              <div class="q-ml-sm text-orange-5">
                {{ useWrapperStore().selectedGroup?.account?.owner }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
