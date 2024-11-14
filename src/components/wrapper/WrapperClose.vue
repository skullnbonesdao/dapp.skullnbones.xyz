<script setup lang="ts">
import { ref } from 'vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'stores/globalWrapper';

const $q = useQuasar();
const optionUnwrapped = ref();
const mintWrappedDecimals = ref<number>(9);
const ratioUnwrapped = ref<number>(1);
const ratioWrapped = ref<number>(1);

async function closeWrapper() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      await pg_wrapper.methods
        .close()
        .accountsPartial({
          wrapper: useWrapperStore().selectedFactory?.publicKey,
          signer: useWallet().publicKey.value,
          mintUnwrapped:
            useWrapperStore().selectedFactory?.account.mintUnwrapped,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();
    }

    $q.notify({
      message: 'Closed  wrapper factory successfully',
      type: 'positive',
    });

    await useWrapperStore().load_wrapper();
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
  <q-btn color="primary" label="Close Wrapper" @click="closeWrapper()"></q-btn>
</template>

<style scoped lang="sass"></style>
