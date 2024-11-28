<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { WRAPPER_FEE_ACCOUNT } from 'src/solana/wrapper/constants';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';

const $q = useQuasar();

const groupName = ref<string>('');

async function createNewGroup() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    if (groupName.value == '') {
      $q.notify({
        message: 'Invalid group name',
        color: 'info',
        position: 'bottom-right',
      });
      return;
    }

    tx.add(
      await pg_wrapper.methods
        .initializeGroup(groupName.value as any)
        .accountsPartial({
          signer: getSigner(),
          fee: WRAPPER_FEE_ACCOUNT,
        })
        .instruction(),
    );
    await handleTransaction(tx, '[Raffle] create new group');
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
  <div class="row">
    {{ getSigner() }}
    <q-input
      square
      filled
      class="col"
      v-model="groupName"
      label="New group name"
      type="text"
    ></q-input>
    <q-btn
      square
      @click.prevent="createNewGroup()"
      color="primary"
      label="Create"
    ></q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
