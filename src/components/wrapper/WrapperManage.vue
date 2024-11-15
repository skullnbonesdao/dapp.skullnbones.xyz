<script setup lang="ts">
import { ref } from 'vue';
import CreateWrapper from 'components/wrapper/WrapperCreate.vue';
import { useWrapperStore, WrapperFactory } from 'stores/globalWrapper';
import WrapperInfo from 'components/wrapper/WrapperInfo.vue';
import WrapperClose from 'components/wrapper/WrapperClose.vue';
import { useAccountStore } from 'stores/globalAccountStore';
import WrapperEdit from 'components/wrapper/WrapperEdit.vue';
import WrapperVault from 'components/wrapper/WrapperVault.vue';
import WrapperMetadata from 'components/wrapper/WrapperMetadata.vue';

const tabSelected = ref('select');

const confirmClose = ref(false);
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
      <q-tab name="select" label="Edit" />
      <q-tab name="close" label="Close" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tabSelected" animated>
      <q-tab-panel name="create">
        <CreateWrapper />
      </q-tab-panel>

      <q-tab-panel name="select">
        <q-card flat>
          <q-card-section>
            <div class="row q-gutter-x-md">
              <q-select
                label="Select a wrapper"
                class="col"
                filled
                v-model="useWrapperStore().selectedFactory"
                :options="useWrapperStore().factories"
                :option-label="
                  (option: WrapperFactory) => {
                    return (
                      '[Wrapped] ' +
                      (useAccountStore().tokenList.find(
                        (t) =>
                          t.address ==
                          option.account?.mintUnwrapped?.toString(),
                      )?.name ??
                        option.account?.mintUnwrapped.toString() ??
                        '')
                    );
                  }
                "
              ></q-select>
            </div>
            <div class="text-caption text-grey text-right">
              Total Found: {{ useWrapperStore().factories.length }}
            </div>
          </q-card-section>
          <q-card-section
            v-if="useWrapperStore().selectedFactory?.account"
            class="row justify-between"
          >
            <WrapperInfo />
            <div class="q-gutter-y-md">
              <WrapperVault />
              <WrapperMetadata />
            </div>
            <WrapperEdit />
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="close">
        <q-card flat>
          <q-card-section>
            <div class="row">
              <q-select
                label="Select a wrapper"
                class="col"
                filled
                v-model="useWrapperStore().selectedFactory"
                :options="useWrapperStore().factories"
                :option-label="
                  (option: WrapperFactory) => {
                    return (
                      '[Wrapped] ' +
                      (useAccountStore().tokenList.find(
                        (t) =>
                          t.address ==
                          option.account?.mintUnwrapped?.toString(),
                      )?.name ??
                        option.account?.mintUnwrapped.toString() ??
                        '')
                    );
                  }
                "
              ></q-select>
              <WrapperClose :disabled="!confirmClose" />
            </div>
          </q-card-section>
          <q-card-section
            v-if="useWrapperStore().selectedFactory?.account"
            class="row justify-between"
          >
          </q-card-section>
        </q-card>
        <q-card-section class="row items-center">
          <div class="text-h6 text-red-6 col">
            I know what im doing i want to close a wrapper
          </div>
          <q-checkbox color="red" v-model="confirmClose" />
        </q-card-section>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
