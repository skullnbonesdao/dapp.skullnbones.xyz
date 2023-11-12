<script setup lang="ts">
import * as factory from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { onMounted, ref } from 'vue';
import AccountTemplate from 'components/Accounts/AccountTemplate.vue';
import AccountStatic from 'components/Accounts/AccountStatic.vue';
import { matInbox } from '@quasar/extras/material-icons';

const count = ref(0);
const data = ref();

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
  <q-page class="col items-center justify-evenly q-mx-sm q-pt-sm q-gutter-y-md">
    <div class="row q-gutter-sm">
      <div class="col">
        <q-input
          class="col"
          v-model="public_key"
          label="Wallet Address"
        ></q-input>
        <q-input class="col" v-model="token_mint" label="Token Mint"></q-input>
      </div>
      <q-btn color="primary" icon="send" @click="send" />
    </div>

    <div>Solana</div>
    <AccountTemplate
      :count="count"
      function_name="getAssociatedTokenAddress(mint)"
      :public-key="public_key"
      :mint="token_mint"
    />

    <div>StarAtlas-Locker</div>

    <AccountTemplate
      :count="count"
      function_name="getRegisteredStake"
      :public-key="public_key"
      :mint="token_mint"
    />
    <AccountTemplate
      :count="count"
      function_name="getStakingAccount"
      :public-key="public_key"
      :mint="token_mint"
    />

    <AccountTemplate
      :count="count"
      function_name="getTokenEscrow"
      :public-key="public_key"
      :mint="token_mint"
    />
  </q-page>
</template>

<style scoped lang="sass"></style>
