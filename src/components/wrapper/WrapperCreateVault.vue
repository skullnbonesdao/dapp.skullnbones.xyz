<script setup lang="ts">
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';

import { ref } from 'vue';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { handleTransaction } from 'src/solana/handleTransaction';

const $q = useQuasar();
const vaultFound = ref<boolean>(false);

async function buildTX(label: string) {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    tx.add(
      await pg_wrapper.methods
        .createVault()
        .accountsPartial({
          wrapper: new PublicKey(
            useWrapperStore().wrapperSelected.publicKey.toString(),
          ),
          signer: getSigner(),
          mintUnwrapped: new PublicKey(
            useWrapperStore().wrapperSelected.account.mintUnwrapped.toString(),
          ),
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Wrapper] create vault');
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
    v-if="!vaultFound && useWrapperStore().wrapperSelected?.publicKey"
    color="primary"
    label="Create Vault"
    @click="buildTX('Created vault')"
  />
</template>

<style scoped lang="sass"></style>
