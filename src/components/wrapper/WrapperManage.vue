<script setup lang="ts">
import { ref } from 'vue';
import CreateWrapper from 'components/wrapper/WrapperCreate.vue';
import {
  useWrapperStore,
  WrapperAccount,
} from 'src/solana/wrapper/WrapperStore';
import WrapperInfo from 'components/wrapper/WrapperInfo.vue';
import WrapperClose from 'components/wrapper/WrapperClose.vue';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import WrapperSettings from 'components/wrapper/WrapperSettings.vue';
import WrapperVault from 'components/wrapper/WrapperVault.vue';
import WrapperMetadata from 'components/wrapper/WrapperMetadata.vue';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';

const tabSelected = ref('select');

const confirmClose = ref(false);
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h5">WrapperInterface Factory</div>
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
                v-model="useWrapperStore().wrapperSelected"
                :options="useWrapperStore().wrapper"
                :option-label="
                  (option: WrapperAccount) => {
                    return (
                      '[Wrapped] ' +
                      (useTokenListStore().tokenList.find(
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
              Total Found: {{ useWrapperStore().wrapper.length }}
            </div>
          </q-card-section>
          <q-card-section
            v-if="useWrapperStore().wrapperSelected?.account"
            class="row full-width"
          >
            <q-list bordered class="rounded-borders full-width">
              <q-expansion-item
                expand-separator
                class="text-h5"
                icon="info"
                label="Info"
              >
                <WrapperInfo />
              </q-expansion-item>
              <q-expansion-item
                expand-separator
                class="text-h5"
                icon="settings"
                label="Settings"
              >
                <WrapperSettings />
              </q-expansion-item>
              <q-expansion-item
                expand-separator
                class="text-h5"
                icon="note_add"
                label="Metadata"
              >
                <WrapperMetadata />
              </q-expansion-item>
              <q-expansion-item
                default-opened
                expand-separator
                class="text-h5"
                icon="inventory_2"
                label="Vault"
              >
                <WrapperVault />
              </q-expansion-item>
            </q-list>
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
                v-model="useWrapperStore().wrapperSelected"
                :options="useWrapperStore().wrapper"
                :option-label="
                  (option: WrapperAccount) => {
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
            v-if="useWrapperStore().wrapperSelected?.account"
            class="row justify-between"
          >
          </q-card-section>
        </q-card>
        <q-card-section class="row items-center">
          <q-checkbox color="red" v-model="confirmClose" />
          <div class="text-h6 text-red-6 col">
            I know what im doing i want to close a wrapper
          </div>
        </q-card-section>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped lang="sass"></style>
