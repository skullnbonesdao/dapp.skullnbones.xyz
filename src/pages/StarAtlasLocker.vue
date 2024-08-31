<script setup lang="ts">
import { ref } from 'vue';
import InfoLockerView from 'components/locker/SetupLockerView.vue';
import AtlasLockerView from 'components/locker/AtlasLockerView.vue';
import PolisLockerView from 'components/locker/PolisLockerView.vue';
import TokenLockerBalances from 'components/locker/TokenLockerBalances.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';

const lockerTabs = ref('setup');
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
      <q-tabs v-model="lockerTabs" align="left">
        <q-tab name="setup" label="Setup" />
        <q-tab name="atlas" label="Atlas" />
        <q-tab name="polis" label="Polis" />
        <div class="col"></div>
        <TokenLockerBalances class="q-pr-md col" />
      </q-tabs>

      <InfoLockerView v-if="lockerTabs == 'setup'" />
      <AtlasLockerView v-if="lockerTabs == 'atlas'" />
      <PolisLockerView v-if="lockerTabs == 'polis'" />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
