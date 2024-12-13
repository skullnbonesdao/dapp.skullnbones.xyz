<script setup lang="ts">
import { ref } from 'vue';
import TokenLockerBalances from 'components/locker/TokenLockerBalances.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import AtlasLockerView from 'components/locker/AtlasLockerView.vue';
import PolisLockerView from 'components/locker/PolisLockerView.vue';
import PolisInstructionBuilderView from 'components/locker/PolisInstructionBuilderView.vue';
import PolisInstructionInfoView from 'components/locker/PolisInstructionInfoView.vue';

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
        <TokenLockerBalances class="q-pr-md col" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="lockerTabs" animated>
        <q-tab-panel name="atlas">
          <AtlasLockerView />
        </q-tab-panel>
        <q-tab-panel name="polis">
          <PolisInstructionInfoView />
          <PolisInstructionBuilderView />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
