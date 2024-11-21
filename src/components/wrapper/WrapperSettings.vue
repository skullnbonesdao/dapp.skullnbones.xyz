<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import { PublicKey, Transaction } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const $q = useQuasar();

const wrapper = useWrapperStore().wrapperSelected?.account;
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
  () => useWrapperStore()?.wrapperSelected?.account,
  () => {
    mapCurrentWrapperToParams();
  },
);

function mapCurrentWrapperToParams() {
  if (!useWrapperStore().wrapperSelected?.account) return;

  const wrapper = useWrapperStore().wrapperSelected?.account;

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
      const tx = new Transaction();

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
                  useWrapperStore().wrapperSelected?.account?.mintUnwrapped.toString(),
              )?.decimals
          : null,
        admin: changeAdmin.value ? new PublicKey(admin.value) : null,
        ratio: changeRatio.value
          ? [new anchor.BN(ratio_a.value), new anchor.BN(ratio_b.value)]
          : null,
      } as any;

      tx.add(
        await useWorkspaceAdapter()
          ?.pg_wrapper.value.methods.edit(params)
          .accountsPartial({
            wrapper: useWrapperStore().wrapperSelected?.publicKey,
            signer: getSigner(),
            mintUnwrapped:
              useWrapperStore().wrapperSelected?.account.mintUnwrapped,
            whitelist: null,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .instruction(),
      );
      await handleTransaction(tx);
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
  <q-card flat>
    <q-card-section>
      <div class="row items-center">
        <div class="col text-subtitle1">Allow wrap</div>
        <q-checkbox v-model="allowWrap" />
      </div>
      <div class="row items-center">
        <div class="col text-subtitle1">Allow unwrap</div>
        <q-checkbox v-model="allowUnwrap" />
      </div>
      <div class="row items-center">
        <div class="col text-subtitle1">Only creator can unwrap</div>
        <q-checkbox v-model="onlyCreatorCanUnwrap" />
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1">Use whitelist</div>
        <q-checkbox v-model="useWhitelist" />
      </div>

      <div>
        <div class="row items-center">
          <div class="col text-subtitle1">Use Limit</div>
          <q-checkbox v-model="useLimit" />
        </div>
        <div v-if="useLimit">
          <q-input filled square v-model="amountAbleToWrap" />
        </div>
      </div>
      <div>
        <div class="row items-center">
          <div class="col text-subtitle1">Change Admin</div>
          <q-checkbox v-model="changeAdmin" />
        </div>
        <div v-if="changeAdmin">
          <q-input filled square v-model="admin" />
        </div>
      </div>
      <div>
        <div class="row items-center">
          <div class="col text-subtitle1">Change Ratio</div>
          <q-checkbox v-model="changeRatio" />
        </div>
        <div v-if="changeRatio" class="row items-center">
          <q-input filled square v-model="ratio_a" type="number" />
          <q-icon size="md" name="swap_horiz" />
          <q-input filled square v-model="ratio_b" type="number" />
        </div>
      </div>
    </q-card-section>

    <q-card-section class="row justify-end">
      <q-btn
        square
        class=""
        color="primary"
        label="Update settings"
        @click="updateWrapper()"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
