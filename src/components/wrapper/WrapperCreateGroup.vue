<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';

const $q = useQuasar();

const groupName = ref<string>('');

async function createNewGroup() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      if (groupName.value == '') {
        $q.notify('Invalid group name');
        return;
      }
      await pg_wrapper.methods
        .initializeGroup(groupName.value as any)
        .accountsPartial({
          signer: useWallet().publicKey.value,
          fee: WRAPPER_FEE_ACCOUNT,
        })
        .rpc();
    }

    $q.notify({
      message: 'Group created successfully',
      type: 'positive',
    });

    await useWrapperStore().load_groups();
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
