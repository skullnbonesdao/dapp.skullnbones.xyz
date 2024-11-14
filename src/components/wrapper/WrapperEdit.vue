<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'stores/globalWrapper';
import { useWallet } from 'solana-wallets-vue';

const $q = useQuasar();

const limitAmount = ref(0);
const params = ref({
  allowWrap: false,
  allowUnwrap: false,
  onlyCreatorCanUnwrap: false,
  useWhitelist: false,
  useLimit: false,
  amountAbleToWrap: null,
  admin: null,
  ratio: null,
});
mapCurrentWrapperToParams();

watch(
  () => useWrapperStore()?.selectedFactory?.account,
  () => {
    mapCurrentWrapperToParams();
  },
);

function mapCurrentWrapperToParams() {
  if (!useWrapperStore().selectedFactory?.account) return;

  const wrapper = useWrapperStore().selectedFactory?.account;

  params.value = {
    allowWrap: wrapper!.allowWrap,
    allowUnwrap: wrapper!.allowUnwrap,
    onlyCreatorCanUnwrap: wrapper!.onlyCreatorCanUnwrap,
    useWhitelist: wrapper!.useWhitelist,
    useLimit: wrapper!.useLimit,
    amountAbleToWrap: wrapper!.amountAbleToWrap,
    admin: wrapper!.admin,
    ratio: wrapper!.ratio,
  } as any;
}

async function updateWrapper() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      await pg_wrapper.methods
        .edit(params.value as any)
        .accountsPartial({
          wrapper: useWrapperStore().selectedFactory?.publicKey,
          signer: useWallet().publicKey.value,
          mintUnwrapped:
            useWrapperStore().selectedFactory?.account.mintUnwrapped,
          whitelist: null,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();
    }

    $q.notify({
      message: 'Created new wrapper factory successfully',
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
  <q-card bordered flat style="max-width: 500px; min-width: 300px">
    <q-card-section class="">
      <div class="text-h4">Settings</div>
    </q-card-section>
    <q-separator />

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Allow wrap</div>
      <q-checkbox v-model="params.allowWrap" />
    </q-card-section>
    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Allow unwrap</div>
      <q-checkbox v-model="params.allowUnwrap" />
    </q-card-section>
    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Only creator can unwrap</div>
      <q-checkbox v-model="params.onlyCreatorCanUnwrap" />
    </q-card-section>

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Use whitelist</div>
      <q-checkbox v-model="params.useWhitelist" />
    </q-card-section>

    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1">Use Limit</div>
        <q-checkbox v-model="params.useLimit" />
      </div>
      <div>
        <q-input filled square v-if="params.useLimit" v-model="limitAmount" />
      </div>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <q-btn
        class="full-width"
        color="primary"
        label="Update"
        @click="updateWrapper()"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
