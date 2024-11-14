<script setup lang="ts">
import { ref } from 'vue';
import CreateWrapper from 'components/wrapper/WrapperCreate.vue';
import { useWrapperStore, WrapperFactory } from 'stores/globalWrapper';
import WrapperInfo from 'components/wrapper/WrapperInfo.vue';
import WrapperClose from 'components/wrapper/WrapperClose.vue';
import { useAccountStore } from 'stores/globalAccountStore';
import WrapperEdit from 'components/wrapper/WrapperEdit.vue';
import WrapperVault from 'components/wrapper/WrapperVault.vue';

const tabSelected = ref('select');
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
      <q-tab name="select" label="Select" />
      <q-tab name="create" label="Create" />
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
                      )?.name ?? option.account?.mintUnwrapped.toString())
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
            <WrapperInfo class="" />
            <WrapperEdit class="" />
            <WrapperVault class="" />
          </q-card-section>

          <q-card-actions class="justify-end">
            <WrapperClose />
          </q-card-actions>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
