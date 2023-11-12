<script setup lang="ts">
import * as factory from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { onMounted, ref } from 'vue';
import AccountTemplate from 'components/Accounts/AccountTemplate.vue';
import AccountStatic from 'components/Accounts/AccountStatic.vue';

const count = ref(0);
const data = ref();

const public_key = ref('none');

onMounted(() => {
  public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
});

const send = () => {
  count.value++;
};
</script>

<template>
  <q-page class="col items-center justify-evenly q-mx-sm q-pt-sm q-gutter-y-md">
    <div class="row">
      <q-input
        class="col"
        v-model="public_key"
        label="Wallet Address"
      ></q-input>
      <q-btn color="primary" icon="send" @click="send" />
    </div>

    <AccountStatic
      function_name="getRegisteredStake(Atlas)"
      data="J5GhV1WKcEU98c1kZt36ixjaErrrPNWbZhg3JQDg114E"
    ></AccountStatic>

    <AccountTemplate
      :count="count"
      function_name="getRegisteredStake"
      :public-key="public_key"
    />
    <AccountTemplate
      :count="count"
      function_name="getStakingAccount"
      :public-key="public_key"
    />
  </q-page>
</template>

<style scoped lang="sass"></style>
