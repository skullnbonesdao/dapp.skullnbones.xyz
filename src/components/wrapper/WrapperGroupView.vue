<script setup lang="ts">
import { ref } from 'vue';
import { useWrapperStore } from 'stores/globalWrapper';
import WrapperCreateGroup from 'components/wrapper/WrapperCreateGroup.vue';
import WrapperCloseGroup from 'components/wrapper/WrapperCloseGroup.vue';
import WrapperGroupSelect from 'components/wrapper/WrapperGroupSelect.vue';

const tabSelected = ref('select');
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5">Group</div>
      <div class="text-caption text-grey">
        The group will be used to filter and create the wrappers - one time
        creation fee of 0.5 SOL
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
      <q-tab name="select" label="Select" />
      <q-tab name="create" label="Create" />
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
              <WrapperGroupSelect />
              <WrapperCloseGroup />
            </div>
          </q-card-section>
          <q-card-section>
            <div
              v-if="useWrapperStore().selectedGroup?.account"
              class="text-caption row"
            >
              <div style="width: 50px">ID:</div>
              <div class="col text-orange-5 text-right">
                {{ useWrapperStore().selectedGroup?.publicKey }}
              </div>
            </div>
            <div
              v-if="useWrapperStore().selectedGroup?.account"
              class="text-caption row"
            >
              <div style="width: 50px">Owner:</div>
              <div class="col text-orange-5 text-right">
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
