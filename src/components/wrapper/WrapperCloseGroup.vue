<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useWrapperStore } from 'stores/globalWrapper';

const $q = useQuasar();

async function closeGroup() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      await pg_wrapper.methods
        .closeGroup()
        .accountsPartial({
          group: useWrapperStore().selectedGroup.publicKey,
          signer: useWallet().publicKey.value,
        })
        .rpc();
    }

    $q.notify({
      message: 'Group closed successfully',
      type: 'positive',
    });
  } catch (err) {
    $q.notify({
      message: err.message,
      type: 'negative',
    });
  }
}
</script>

<template>
  <q-btn color="primary" label="Close" @click.prevent="closeGroup()" />
</template>

<style scoped lang="sass"></style>
