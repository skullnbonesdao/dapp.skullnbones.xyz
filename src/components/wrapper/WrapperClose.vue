<script setup lang="ts">
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { Transaction } from '@solana/web3.js';
import { getSigner } from 'src/solana/squads/SignerFinder';

const $q = useQuasar();

const props = defineProps({
  disabled: {
    default: true,
  },
});

async function closeWrapper() {
  try {
    if (useWorkspaceAdapter()) {
      const tx = new Transaction();
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      tx.add(
        await pg_wrapper.methods
          .close()
          .accountsPartial({
            wrapper: useWrapperStore().wrapperSelected?.publicKey,
            signer: getSigner(),
            mintUnwrapped:
              useWrapperStore().wrapperSelected?.account.mintUnwrapped,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .instruction(),
      );

      await handleTransaction(tx, 'Close Wrapper');
    }

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
    :disable="disabled"
    square
    color="primary"
    label="Close Wrapper"
    @click="closeWrapper()"
  ></q-btn>
</template>

<style scoped lang="sass"></style>
