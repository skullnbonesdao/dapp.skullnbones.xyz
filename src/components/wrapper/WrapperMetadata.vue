<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { useRPCStore } from 'stores/rpcStore';
import { ref, watch } from 'vue';
import WrapperMetadataUpdate from 'components/wrapper/WrapperMetadataUpdate.vue';
import * as Metadata from '@metaplex-foundation/mpl-token-metadata';
import WrapperMetadataCreate from 'components/wrapper/WrapperMetadataCreate.vue';
import { findMetadataAddress } from 'src/solana/wrapper/WrapperInterface';

const $q = useQuasar();

const metadataName = ref('');
const metadataSymbol = ref('');
const metadataURI = ref('');

const accountInfo = ref();
const metadata = ref<Metadata>();
const metadataExists = ref(false);
loadAccountInfo();

watch(
  () => useWrapperStore()?.wrapperSelected?.account,
  async () => {
    await loadAccountInfo();
  },
);

async function loadAccountInfo() {
  accountInfo.value = await useRPCStore().connection.getAccountInfo(
    findMetadataAddress(useWrapperStore().wrapperSelected.account.mintWrapped),
  );

  metadata.value = Metadata.deserializeMetadata(accountInfo.value);

  metadataName.value = metadata.value.name;
  metadataSymbol.value = metadata.value.symbol;
  metadataURI.value = metadata.value.uri;

  if (accountInfo.value) metadataExists.value = true;
}
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1 text-weight-thin">Address</div>
        <div class="text-subtitle2">
          {{ findMetadataAddress(useWrapperStore().wrapperSelected.publicKey) }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="col" v-if="metadataExists">
      <div class="row">
        <q-input square label="Name" filled v-model="metadataName" />
        <q-separator vertical />
        <q-input square label="Symbol" filled v-model="metadataSymbol" />
        <q-separator vertical />
        <q-input
          square
          label="Image URI"
          class="col"
          filled
          v-model="metadataURI"
        />

        <WrapperMetadataUpdate
          :name="metadataName"
          :symbol="metadataSymbol"
          :uri="metadataURI"
        />
      </div>
    </q-card-section>

    <q-card-section class="row justify-end" v-else>
      <WrapperMetadataCreate
        :name="metadataName"
        :symbol="metadataSymbol"
        :uri="metadataURI"
      />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
