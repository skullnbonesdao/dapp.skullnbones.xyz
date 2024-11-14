<script setup lang="ts">
import { useQuasar } from 'quasar';
import WrapperCreateVault from 'components/wrapper/WrapperCreateVault.vue';
import { useWrapperStore } from '../../stores/globalWrapper';
import { useRPCStore } from 'stores/rpcStore';
import { ref, watch } from 'vue';
import { ParsedAccountData } from '@solana/web3.js';
import { useAccountStore } from '../../stores/globalAccountStore';

const $q = useQuasar();

const accountInfo = ref<ParsedAccountData | null>(null);
const vaultExists = ref(false);
loadAccountInfo();

watch(
  () => useWrapperStore()?.selectedFactory?.account,
  async () => {
    await loadAccountInfo();
  },
);

async function loadAccountInfo() {
  accountInfo.value = (
    await useRPCStore().connection.getParsedAccountInfo(
      useWrapperStore().getVault,
    )
  ).value?.data as ParsedAccountData;

  if (accountInfo.value) vaultExists.value = true;
}
</script>

<template>
  <q-card bordered flat style="max-width: 500px">
    <q-card-section class="">
      <div class="text-h4">Vault</div>
    </q-card-section>
    <q-separator />

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Mint</div>
      <div>{{ useWrapperStore().selectedFactory.account?.mintUnwrapped }}</div>
    </q-card-section>
    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Name</div>
      <div>
        {{
          useAccountStore().tokenList.find(
            (t) =>
              t.address ==
              useWrapperStore().selectedFactory.account?.mintUnwrapped.toString(),
          )?.name
        }}
      </div>
    </q-card-section>

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Balance</div>
      <div>{{ accountInfo?.parsed.info.tokenAmount.uiAmount }}</div>
    </q-card-section>
    <q-card-actions class="">
      <WrapperCreateVault v-if="!vaultExists" class="full-width" />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
