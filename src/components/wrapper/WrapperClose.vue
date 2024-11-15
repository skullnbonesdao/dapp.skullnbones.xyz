<script setup lang="ts">
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'stores/globalWrapper';

const $q = useQuasar();

const props = defineProps({
  disabled: {
    default: true,
  },
});

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
  <q-btn
    :disable="disabled"
    square
    color="primary"
    label="Close Wrapper"
    @click="closeWrapper()"
  ></q-btn>
</template>

<style scoped lang="sass"></style>
