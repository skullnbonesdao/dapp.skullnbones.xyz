<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';

import { PublicKey, Transaction } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';

const $q = useQuasar();

const wrapper = useWrapperStore().wrapperSelected?.account;
const allowWrap = ref();
const allowUnwrap = ref();
const onlyAdminCanWrap = ref();
const onlyAdminCanUnwrap = ref();
const useWhitelist = ref();
const whitelistAddress = ref();
const useLimit = ref();
const limitAmountUnwrapped = ref();
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
  onlyAdminCanWrap.value = wrapper?.onlyAdminCanWrap;
  onlyAdminCanUnwrap.value = wrapper?.onlyAdminCanUnwrap;
  useWhitelist.value = wrapper?.useWhitelist;
  whitelistAddress.value = wrapper?.whitelist;
  useLimit.value = wrapper?.useLimit;
  limitAmountUnwrapped.value = wrapper?.limitAmountUnwrapped ?? 0;
  admin.value = wrapper?.admin;
  ratio_a.value = wrapper?.ratio[0];
  ratio_b.value = wrapper?.ratio[1];
}

async function updateWrapper() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    const params = {
      allowWrap: allowWrap.value,
      allowUnwrap: allowUnwrap.value,
      onlyAdminCanWrap: onlyAdminCanWrap.value,
      onlyAdminCanUnwrap: onlyAdminCanUnwrap.value,
      useWhitelist: useWhitelist.value,
      useLimit: useLimit.value,
      amountAbleToWrap: useLimit.value
        ? calcAmountToTransfer(
            limitAmountUnwrapped.value,
            useTokenListStore().tokenList.find(
              (t) =>
                t.address ==
                useWrapperStore().wrapperSelected?.account?.mintUnwrapped.toString(),
            )!.decimals,
          )
        : null,
      admin: changeAdmin.value ? new PublicKey(admin.value) : null,
      ratio: changeRatio.value
        ? [new anchor.BN(ratio_a.value), new anchor.BN(ratio_b.value)]
        : null,
    } as any;

    tx.add(
      await pg_wrapper.methods
        .edit(params)
        .accountsPartial({
          wrapper: useWrapperStore().wrapperSelected?.publicKey,
          signer: getSigner(),
          mintUnwrapped:
            useWrapperStore().wrapperSelected?.account.mintUnwrapped,
          whitelist: useWhitelist.value
            ? new PublicKey(whitelistAddress.value)
            : null,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );
    await handleTransaction(tx);
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
    <q-card-section class="q-gutter-y-sm">
      <div class="row items-center">
        <div class="col text-subtitle1">Allow wrap</div>
        <q-toggle
          v-model="allowWrap"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>
      <div class="row items-center">
        <div class="col text-subtitle1">Allow unwrap</div>
        <q-toggle
          v-model="allowUnwrap"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1">Only admin can Wrap</div>
        <q-toggle
          v-model="onlyAdminCanWrap"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>
      <div class="row items-center">
        <div class="col text-subtitle1">Only admin can unwrap</div>
        <q-toggle
          v-model="onlyAdminCanUnwrap"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1">Use whitelist</div>
        <q-input
          v-if="useWhitelist"
          dense
          filled
          square
          style="width: 500px"
          v-model="whitelistAddress"
          type="text"
          label="Whitelist"
        />
        <q-toggle
          v-model="useWhitelist"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>

      <div class="row items-center">
        <div class="col text-subtitle1">Use Limit</div>

        <q-input
          v-if="useLimit"
          dense
          filled
          square
          style="width: 500px"
          v-model="limitAmountUnwrapped"
          type="number"
          label="Amount wrappable"
        />

        <q-toggle
          v-model="useLimit"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>

      <div>
        <div class="row items-center">
          <div class="col text-subtitle1">Change Admin</div>
          <q-input
            style="width: 500px"
            v-if="changeAdmin"
            dense
            filled
            square
            label="Admin"
            v-model="admin"
          />
          <q-toggle
            v-model="changeAdmin"
            checked-icon="check"
            color="primary"
            unchecked-icon="clear"
          />
        </div>
      </div>
      <div>
        <div class="row items-center">
          <div class="col text-subtitle1">Change Ratio</div>
          <div style="width: 500px" v-if="changeRatio" class="row items-center">
            <q-input
              class="col"
              dense
              filled
              square
              label="Unwrapped"
              v-model="ratio_a"
              type="number"
            />
            <q-icon size="md" name="swap_horiz" />
            <q-input
              class="col"
              dense
              filled
              square
              label="Wrapped"
              v-model="ratio_b"
              type="number"
            />
          </div>
          <q-toggle
            v-model="changeRatio"
            checked-icon="check"
            color="primary"
            unchecked-icon="clear"
          />
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
