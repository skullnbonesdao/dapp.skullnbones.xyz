<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { useRPCStore } from 'stores/rpcStore';
import { ref, watch } from 'vue';
import WrapperMetadataUpdate from 'components/wrapper/WrapperMetadataUpdate.vue';
import * as Metadata from '@metaplex-foundation/mpl-token-metadata';
import WrapperMetadataCreate from 'components/wrapper/WrapperMetadataCreate.vue';
import { findMetadataAddress } from 'src/solana/wrapper/WrapperBuilder';

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
  <q-card bordered flat style="max-width: 500px">
    <q-card-section class="">
      <div class="text-h4">Metadata</div>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div>
        <div class="col text-subtitle1 text-weight-thin">Address:</div>
        <div class="text-subtitle2">
          {{ useWrapperStore().getMetadata }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="col q-gutter-y-md">
      <div>
        <q-input label="Name" filled v-model="metadataName" />
      </div>
      <div>
        <q-input label="Symbol" filled v-model="metadataSymbol" />
      </div>
      <div>
        <q-input label="Image URI" filled v-model="metadataURI" />
      </div>
    </q-card-section>

    <q-card-section class="row q-gutter-y-md">
      <WrapperMetadataUpdate
        v-if="metadataExists"
        class="col"
        :name="metadataName"
        :symbol="metadataSymbol"
        :uri="metadataURI"
      />
      <WrapperMetadataCreate
        v-else
        class="col"
        :name="metadataName"
        :symbol="metadataSymbol"
        :uri="metadataURI"
      />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
