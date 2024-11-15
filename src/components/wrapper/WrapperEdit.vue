<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'stores/globalWrapper';
import { useWallet } from 'solana-wallets-vue';
import { useAccountStore } from 'stores/globalAccountStore';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';

const $q = useQuasar();

const wrapper = useWrapperStore().selectedFactory?.account;
const allowWrap = ref();
const allowUnwrap = ref();
const onlyCreatorCanUnwrap = ref();
const useWhitelist = ref();
const useLimit = ref();
const amountAbleToWrap = ref();
const changeAdmin = ref(false);
const admin = ref();
const changeRatio = ref(false);
const ratio_a = ref();
const ratio_b = ref();

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

  allowWrap.value = wrapper!.allowWrap;
  allowUnwrap.value = wrapper?.allowUnwrap;
  onlyCreatorCanUnwrap.value = wrapper?.onlyCreatorCanUnwrap;
  useWhitelist.value = wrapper?.useWhitelist;
  useLimit.value = wrapper?.useLimit;
  amountAbleToWrap.value = wrapper?.amountAbleToWrap ?? 0;
  admin.value = wrapper?.admin;
  ratio_a.value = wrapper?.ratio[0];
  ratio_b.value = wrapper?.ratio[1];
}

async function updateWrapper() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
      const params = {
        allowWrap: allowWrap.value,
        allowUnwrap: allowUnwrap.value,
        onlyCreatorCanUnwrap: onlyCreatorCanUnwrap.value,
        useWhitelist: useWhitelist.value,
        useLimit: useLimit.value,
        amountAbleToWrap: useLimit.value
          ? amountAbleToWrap.value *
            10 **
              useAccountStore().tokenList.find(
                (t) =>
                  t.address ==
                  useWrapperStore().selectedFactory?.account?.mintUnwrapped.toString(),
              )?.decimals
          : null,
        admin: changeAdmin.value ? new PublicKey(admin.value) : null,
        ratio: changeRatio.value
          ? [new anchor.BN(ratio_a.value), new anchor.BN(ratio_b.value)]
          : null,
      } as any;

      await pg_wrapper.methods
        .edit(params)
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
  <q-card bordered flat style="width: 500px">
    <q-card-section class="">
      <div class="text-h4">Settings</div>
    </q-card-section>
    <q-separator />

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Allow wrap</div>
      <q-checkbox v-model="allowWrap" />
    </q-card-section>
    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Allow unwrap</div>
      <q-checkbox v-model="allowUnwrap" />
    </q-card-section>
    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Only creator can unwrap</div>
      <q-checkbox v-model="onlyCreatorCanUnwrap" />
    </q-card-section>

    <q-card-section class="row items-center">
      <div class="col text-subtitle1">Use whitelist</div>
      <q-checkbox v-model="useWhitelist" />
    </q-card-section>

    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1">Use Limit</div>
        <q-checkbox v-model="useLimit" />
      </div>
      <div v-if="useLimit">
        <q-input filled square v-model="amountAbleToWrap" />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1">Change Admin</div>
        <q-checkbox v-model="changeAdmin" />
      </div>
      <div v-if="changeAdmin">
        <q-input filled square v-model="admin" />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1">Change Ratio</div>
        <q-checkbox v-model="changeRatio" />
      </div>
      <div v-if="changeRatio" class="row items-center">
        <q-input filled square v-model="ratio_a" type="number" />
        <q-icon size="md" name="swap_horiz" />
        <q-input filled square v-model="ratio_b" type="number" />
      </div>
    </q-card-section>
    <q-separator />

    <q-card-actions class="absolute-bottom">
      <q-btn
        square
        class="full-width"
        color="primary"
        label="Update"
        @click="updateWrapper()"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
