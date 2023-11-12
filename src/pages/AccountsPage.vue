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

const count = ref(0);
const data = ref();
const selected_tab = ref('lookup');

const public_key = ref('none');
const token_mint = ref('ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx');
const tree_elemenets_staratlas = ref([
  {
    label: 'Solana',
    header: 'root',
    children: [
      {
        label: 'Tokens',
        header: 'generic',
        children: [
          {
            label: 'getAssociatedTokenAddress() by mint',
            function_name: 'getAssociatedTokenAddress(mint)',
            header: 'generic',
            body: 'story',
          },
        ],
      },
    ],
  },
  {
    label: 'StarAtlas-Factory',
    header: 'root',
    children: [
      {
        label: 'Staking (Atlas/Polis)',
        icon: 'restaurant_menu',
        header: 'generic',
        children: [
          {
            label: 'getRegisteredStake()',
            function_name: 'getRegisteredStake',
            header: 'generic',
            body: 'story',
          },
          {
            label: 'getStakingAccount()',
            function_name: 'getStakingAccount',
            body: 'story',
          },
          {
            label: 'getTokenEscrow()',
            function_name: 'getTokenEscrow',
            body: 'story',
          },
        ],
      },
    ],
  },
]);

onMounted(() => {
  public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
});

const send = () => {
  count.value++;
};

watch(
  () => useWallet().publicKey.value,
  () => {
    public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
  },
);
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
      <q-tab name="lookup" label="Lookup" />
    </q-tabs>

    <q-tab-panels dark v-model="selected_tab" animated class="q-mx-xl">
      <q-tab-panel name="lookup">
        <div class="row">
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

        <q-separator class="q-my-xl" />

        <q-tree dark :nodes="tree_elemenets_staratlas" node-key="label">
          <template v-slot:header-root="prop">
            <div class="row items-center text-h6">
              <div class="text-blue-4">
                {{ prop.node.label }}
              </div>
            </div>
          </template>

          <template v-slot:header-generic="prop">
            <div class="row items-center">
              <div class="text-weight-bold">
                {{ prop.node.label }}
              </div>
            </div>
          </template>

          <template v-slot:body-story="prop">
            <AccountTemplate
              :count="count"
              :function_name="prop.node.function_name"
              :public-key="public_key"
              :mint="token_mint"
            />
          </template>

          <template v-slot:body-toggle="prop">
            <p class="text-caption">{{ prop.node.caption }}</p>
            <q-toggle
              v-model="prop.node.enabled"
              label="I agree to the terms and conditions"
            />
          </template>
        </q-tree>
      </q-tab-panel>

      <q-tab-panel name="staratlas" class="q-gutter-md"> </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped lang="sass"></style>
