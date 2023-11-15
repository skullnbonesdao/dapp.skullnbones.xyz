<script setup lang="ts">
import * as factory from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { onMounted, ref, watch } from 'vue';
import AccountTemplate from 'components/Accounts/AccountTemplate.vue';
import AccountStatic from 'components/Accounts/AccountStatic.vue';
import { matInbox } from '@quasar/extras/material-icons';
import ViewWhitelist from 'components/whitelist/ViewWhitelist.vue';
import RemoveAddressFromWhitelist from 'components/whitelist/RemoveAddressFromWhitelist.vue';
import CreateWhitelist from 'components/whitelist/CreateWhitelist.vue';
import DeleteWhitelist from 'components/whitelist/DeleteWhitelist.vue';
import AddAddressToWhitelist from 'components/whitelist/AddAddressToWhitelist.vue';
import AccountWalletAccounts from 'components/Accounts/AccountWalletAccounts.vue';
import AccountSolana from 'components/Accounts/AccountSolana.vue';
import { useGlobalStore } from '../stores/globalStore';
import { useGlobalWalletStore } from '../stores/globalWallet';

const data = ref();
const selected_tab = ref('wallet');
</script>

<template>
  <q-page class="col items-center justify-evenly">
    <q-tabs
      no-caps
      outside-arrows
      mobile-arrows
      v-model="selected_tab"
      class="shadow-2"
      align="justify"
    >
      <q-tab name="wallet" label="Wallet" />
      <q-tab name="solana" label="Solana" />
    </q-tabs>

    <q-tab-panels dark v-model="selected_tab" animated class="">
      <q-tab-panel name="wallet">
        <AccountWalletAccounts />
      </q-tab-panel>

      <q-tab-panel name="solana" class="q-gutter-md">
        <AccountSolana />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped lang="sass"></style>
