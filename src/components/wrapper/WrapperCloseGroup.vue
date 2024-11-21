<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const props = defineProps({
  disabled: {
    default: true,
  },
});
const $q = useQuasar();

async function closeGroup() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    tx.add(
      await pg_wrapper.methods
        .closeGroup()
        .accountsPartial({
          group: useWrapperStore().groupSelected.publicKey,
          signer: getSigner(),
        })
        .instruction(),
    );

    await handleTransaction(tx, 'Close Group');
    await useWrapperStore().updateStore();
  } catch (err) {
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
    label="Close"
    @click.prevent="closeGroup()"
  />
</template>

<style scoped lang="sass"></style>
