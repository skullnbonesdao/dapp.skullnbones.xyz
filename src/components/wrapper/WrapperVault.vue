<script setup lang="ts">
import { useQuasar } from 'quasar';
import WrapperCreateVault from 'components/wrapper/WrapperCreateVault.vue';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { useRPCStore } from 'stores/rpcStore';
import { ref, watch } from 'vue';
import { ParsedAccountData } from '@solana/web3.js';
import WrapperVaultDonut from 'components/wrapper/WrapperVaultDonut.vue';
import WrapperTransferVaultOut from 'components/wrapper/WrapperTransferVaultOut.vue';
import { findVaultAddress } from 'src/solana/wrapper/WrapperInterface';
import { useTokenListStore } from '../../solana/tokens/TokenListStore';

const $q = useQuasar();

const accountInfo = ref<ParsedAccountData | null>(null);
const vaultExists = ref(false);
loadAccountInfo();

watch(
  () => useWrapperStore()?.wrapperSelected?.account,
  async () => {
    await loadAccountInfo();
  },
);

async function loadAccountInfo() {
  accountInfo.value = (
    await useRPCStore().connection.getParsedAccountInfo(
      findVaultAddress(
        useWrapperStore().wrapperSelected.publicKey,
        useWrapperStore().wrapperSelected.account.mintUnwrapped,
      ),
    )
  ).value?.data as ParsedAccountData;

  if (accountInfo.value) vaultExists.value = true;
}
</script>

<template>
  <q-card flat>
    <q-separator />

    <q-card-section class="col">
      <div class="row items-center">
        <div class="col text-subtitle1 text-weight-thin">Address</div>
        <div class="text-subtitle2">
          {{
            findVaultAddress(
              useWrapperStore().wrapperSelected.publicKey,
              useWrapperStore().wrapperSelected.account.mintUnwrapped,
            )
          }}
        </div>
      </div>
      <div class="row items-center">
        <div class="col text-subtitle1 text-weight-thin">Mint</div>
        <div class="text-subtitle2">
          {{ useWrapperStore().wrapperSelected.account?.mintUnwrapped }}
        </div>
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1 text-weight-thin">Unwrapped</div>
        <div class="text-subtitle2">
          {{
            useTokenListStore().getTokenByMintPublicKey(
              useWrapperStore().wrapperSelected.account.mintUnwrapped!,
            ).name
          }}
        </div>
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1 text-weight-thin">Balance</div>
        <div class="text-subtitle2">
          {{ accountInfo?.parsed.info.tokenAmount.uiAmount }}
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <WrapperVaultDonut :wrapper="useWrapperStore().wrapperSelected" />
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <WrapperCreateVault v-if="!vaultExists" class="full-width" />
      <WrapperTransferVaultOut />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
