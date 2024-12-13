<script setup lang="ts">
import { ref } from 'vue';
import TokenLockerBalances from 'components/locker/TokenLockerBalances.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';

import PolisInstructionBuilderView from 'components/locker/polis/PolisInstructionBuilderView.vue';

import AtlasInfoView from 'components/locker/atlas/AtlasInfoView.vue';
import PolisInfoView from 'components/locker/polis/PolisInfoView.vue';
import AtlasInstructionBuilderView from 'components/locker/atlas/AtlasInstructionBuilderView.vue';

const lockerTabs = ref('atlas');
</script>

<template>
  <q-page class="bg-black">
    <div
      v-if="!useWallet().publicKey?.value?.toString()"
      class="col absolute-center"
    >
      <WalletMultiButton dark></WalletMultiButton>
    </div>

    <div v-else>
      <q-tabs v-model="lockerTabs" align="justify" class="col bg-dark">
        <q-tab name="atlas">
          <template v-slot:default>
            <div class="row items-center q-gutter-x-sm">
              <q-avatar>
                <img src="currencies\ATLAS.webp" />
              </q-avatar>
              <div class="text-h5">ATLAS</div>
            </div>
          </template>
        </q-tab>
        <q-separator vertical />
        <q-tab name="polis">
          <template v-slot:default>
            <div class="row items-center q-gutter-x-sm">
              <q-avatar>
                <img src="currencies\POLIS.webp" />
              </q-avatar>
              <div class="text-h5">POLIS</div>
            </div>
          </template>
        </q-tab>
        <q-separator vertical />
        <TokenLockerBalances class="q-pr-md col" :tab="lockerTabs" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="lockerTabs" animated>
        <q-tab-panel name="atlas">
          <AtlasInfoView />
          <AtlasInstructionBuilderView />
        </q-tab-panel>
        <q-tab-panel name="polis">
          <PolisInfoView />
          <PolisInstructionBuilderView />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
