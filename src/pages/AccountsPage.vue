<script setup lang="ts">
import { ref } from 'vue';
import AccountSolana from 'components/Accounts/AccountSolana.vue';
import { useGlobalWalletStore } from '../stores/globalWallet';
import AccountWalletAccountsToken from 'components/Accounts/AccountWalletAccountsToken.vue';
import AccountWalletAccountsNft from 'components/Accounts/AccountWalletAccountsNft.vue';

const data = ref();
const selected_tab_0 = ref('wallet');
const selected_tab_1 = ref('token');
</script>

<template>
  <q-page class="col items-center justify-evenly">
    <div class="col shadow-1 bg-dark">
      <q-tabs
        no-caps
        outside-arrows
        mobile-arrows
        v-model="selected_tab_0"
        align="justify"
      >
        <q-tab name="wallet" label="Wallet" />
        <q-tab name="solana" label="Solana" />
      </q-tabs>

      <div class="row">
        <q-tabs
          class="col"
          v-if="selected_tab_0 == 'wallet'"
          mobile-arrows
          v-model="selected_tab_1"
          align="justify"
        >
          <q-tab name="token" label="Token" />
          <q-tab name="nft" label="NFT" />
        </q-tabs>
        <div class="col" />
      </div>
    </div>

    <q-tab-panels dark v-model="selected_tab_0" animated class="q-ma-md">
      <q-tab-panel name="wallet">
        <div v-if="useGlobalWalletStore().is_loading" class="row">
          <q-space />
          <q-spinner-cube class="row" color="primary" size="3rem" />
          <q-space />
        </div>
        <AccountWalletAccountsToken v-if="selected_tab_1 == 'token'" />
        <AccountWalletAccountsNft v-if="selected_tab_1 == 'nft'" />
      </q-tab-panel>
      <q-tab-panel name="solana" class="q-gutter-md">
        <AccountSolana />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped lang="sass"></style>
