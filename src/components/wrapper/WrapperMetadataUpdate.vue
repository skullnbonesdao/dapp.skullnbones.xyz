<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { findMetadataAddress } from 'src/solana/wrapper/WrapperInterface';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';

const props = defineProps(['name', 'symbol', 'uri']);

const $q = useQuasar();

async function buildTX(label: string) {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    const metadata = {
      name: props.name,
      symbol: props.symbol,
      uri: props.uri,
    } as any;
    tx.add(
      await pg_wrapper.methods
        .metadataUpdate(metadata)
        .accountsPartial({
          wrapper: useWrapperStore().wrapperSelected?.publicKey,
          signer: getSigner(),
          metadata: findMetadataAddress(
            useWrapperStore().wrapperSelected.account.mintWrapped,
          ),
          mintUnwrapped:
            useWrapperStore().wrapperSelected?.account.mintUnwrapped,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Wrapper] metadata update');
    await useWrapperStore().updateStore();
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
    label="Apply Metadata"
    @click="buildTX('Metadata update')"
  />
</template>

<style scoped lang="sass"></style>
