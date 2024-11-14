<script setup lang="ts">
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { useWrapperStore } from 'stores/globalWrapper';

const $q = useQuasar();

async function createWrapperVault() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      await pg_wrapper.methods
        .createVault()
        .accountsPartial({
          wrapper: new PublicKey(
            useWrapperStore().selectedFactory.publicKey.toString(),
          ),
          signer: useWallet().publicKey.value,
          mintUnwrapped: new PublicKey(
            useWrapperStore().selectedFactory.account.mintUnwrapped.toString(),
          ),
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();
    }

    $q.notify({
      message: 'Vault for wrapper created successfully',
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
  <q-btn color="primary" label="Create Vault" @click="createWrapperVault()" />
</template>

<style scoped lang="sass"></style>
