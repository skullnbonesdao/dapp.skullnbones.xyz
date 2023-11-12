<script setup lang="ts">
import * as factory from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { onMounted, ref } from 'vue';
import AccountTemplate from 'components/Accounts/AccountTemplate.vue';
import AccountStatic from 'components/Accounts/AccountStatic.vue';
import { matInbox } from '@quasar/extras/material-icons';
import ViewWhitelist from 'components/whitelist/ViewWhitelist.vue';
import RemoveAddressFromWhitelist from 'components/whitelist/RemoveAddressFromWhitelist.vue';
import CreateWhitelist from 'components/whitelist/CreateWhitelist.vue';
import DeleteWhitelist from 'components/whitelist/DeleteWhitelist.vue';
import AddAddressToWhitelist from 'components/whitelist/AddAddressToWhitelist.vue';

const count = ref(0);
const data = ref();
const selected_tab = ref();

const public_key = ref('none');
const token_mint = ref('ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx');

onMounted(() => {
  public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
});

const send = () => {
  count.value++;
};
</script>

<template>
  <q-page class="col items-center justify-evenly q-pt-sm q-gutter-y-md">
    <q-tabs
      no-caps
      outside-arrows
      mobile-arrows
      v-model="selected_tab"
      class="shadow-2"
      align="justify"
    >
      <q-tab name="solana" label="Solana" />
      <q-tab name="staratlas" label="StarAtlas" />
    </q-tabs>

    <q-card class="q-ma-md">
      <div class="row q-gutter-sm q-pa-sm">
        <div class="col">
          <q-input
            class="col"
            v-model="public_key"
            label="Wallet Address"
          ></q-input>
          <q-input
            class="col"
            v-model="token_mint"
            label="Token Mint"
          ></q-input>
        </div>
        <q-btn color="primary" icon="send" @click="send" />
      </div>

      <q-tab-panels dark v-model="selected_tab" animated>
        <q-tab-panel name="solana">
          <AccountTemplate
            :count="count"
            function_name="getAssociatedTokenAddress(mint)"
            :public-key="public_key"
            :mint="token_mint"
          />
        </q-tab-panel>

        <q-tab-panel name="staratlas" class="q-gutter-md">
          <AccountTemplate
            :count="count"
            function_name="getRegisteredStake"
            :public-key="public_key"
            :mint="token_mint" />
          <AccountTemplate
            :count="count"
            function_name="getStakingAccount"
            :public-key="public_key"
            :mint="token_mint" />

          <AccountTemplate
            :count="count"
            function_name="getTokenEscrow"
            :public-key="public_key"
            :mint="token_mint"
        /></q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
