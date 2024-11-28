<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { findMetadataAddress } from 'src/solana/wrapper/WrapperInterface';
import { useRPCStore } from 'stores/rpcStore';
import * as Metadata from '@metaplex-foundation/mpl-token-metadata';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { UNKNOWN_IMAGE } from 'stores/constants';
import { PublicKey } from '@solana/web3.js';

const props = defineProps(['wrapper']);

const imageURLUnwrapped = ref();
const imageURLWrapped = ref();

onMounted(async () => {
  imageURLUnwrapped.value = await loadMetadata(
    props.wrapper.account.mintUnwrapped,
  );
  imageURLWrapped.value = await loadMetadata(props.wrapper.account.mintWrapped);
});

watch(
  () => props.wrapper,
  async () => {
    imageURLUnwrapped.value = await loadMetadata(
      props.wrapper.account.mintUnwrapped,
    );
    imageURLWrapped.value = await loadMetadata(
      props.wrapper.account.mintWrapped,
    );
  },
);

async function loadMetadata(mint: PublicKey) {
  let storedInfo = useTokenListStore().getTokenByMintPublicKey(mint);
  if (storedInfo)
    return useTokenListStore().getTokenByMintPublicKey(mint).logoURI;

  const metadataAccountWrapped = findMetadataAddress(mint);

  const accountInfo = await useRPCStore().connection.getAccountInfo(
    metadataAccountWrapped,
  );

  return Metadata.deserializeMetadata(accountInfo as any).uri;
}
</script>

<template>
  <div class="row items-center">
    <q-avatar size="100px">
      <q-img v-if="imageURLWrapped" :src="imageURLUnwrapped" />
      <q-img
        v-else
        :src="
          useTokenListStore().tokenList.find(
            (t) => t.address == wrapper.account?.mintUnwrapped.toString(),
          )?.logoURI ?? UNKNOWN_IMAGE
        "
      />
    </q-avatar>
    <q-icon class="col" size="md" name="swap_horiz" />
    <q-avatar size="100px">
      <q-img v-if="imageURLWrapped" :src="imageURLWrapped" />
      <q-img
        v-else
        :src="
          useTokenListStore().tokenList.find(
            (t) => t.address == wrapper.account?.mintWrapped.toString(),
          )?.logoURI ?? UNKNOWN_IMAGE
        "
      />
    </q-avatar>
  </div>
</template>

<style scoped lang="sass"></style>
