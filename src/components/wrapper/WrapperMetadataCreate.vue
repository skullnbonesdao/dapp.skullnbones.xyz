<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWrapperStore } from 'stores/globalWrapper';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const props = defineProps(['name', 'symbol', 'uri']);

const $q = useQuasar();

async function buildTX(label: string) {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      const metadata = {
        name: props.name,
        symbol: props.symbol,
        uri: props.uri,
      } as any;
      await pg_wrapper.methods
        .metadataCreate(metadata)
        .accountsPartial({
          wrapper: useWrapperStore().selectedFactory?.publicKey,
          signer: useWallet().publicKey.value,
          metadata: useWrapperStore().getMetadata,
          mintUnwrapped:
            useWrapperStore().selectedFactory?.account.mintUnwrapped,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();
    }

    $q.notify({
      message: `${label} successful!`,
      type: 'positive',
    });
  } catch (err) {
    console.error(err);
    $q.notify({
      message: err.message,
      type: 'negative',
    });
  }
}
</script>

<template>
  <q-btn
    square
    color="primary"
    label="Create Metadata"
    @click="buildTX('Create Metadata')"
  />
</template>

<style scoped lang="sass"></style>
