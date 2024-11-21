<script setup lang="ts">
import { ref } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import {
  AccountStore,
  useAccountStore,
} from 'src/solana/accounts/AccountStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const $q = useQuasar();
const optionUnwrapped = ref();
const mintWrappedDecimals = ref<number>(9);
const ratioUnwrapped = ref<number>(1);
const ratioWrapped = ref<number>(1);

async function createWrapper() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    const params = {
      ratio: [
        new anchor.BN(ratioUnwrapped.value),
        new anchor.BN(ratioWrapped.value),
      ],
      onlyCreatorCanUnwrap: false,
      wrappedDecimals: mintWrappedDecimals.value,
      seed: new anchor.BN(window.crypto.getRandomValues(new Uint8Array(8))),
    };

    tx.add(
      await pg_wrapper.methods
        .initialize(params as any)
        .accountsPartial({
          signer: getSigner(),
          group: new PublicKey(
            useWrapperStore().groupSelected?.publicKey.toString() ?? '',
          ),
          mintUnwrapped: new PublicKey(optionUnwrapped.value.mint.toString()),
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Wrapper] create');
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
    <q-card-section class="">
      <div class="text-h6">Unwrapped Token</div>
      <div class="row q-gutter-x-md items-center">
        <q-select
          filled
          class="col"
          :options="useAccountStore().getAccountsBalanceNotZero"
          :option-label="
            (option: AccountStore) => option.info?.name ?? option.mint
          "
          v-model="optionUnwrapped"
          label="Token to Wrap"
          type="number"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Wrapped Token</div>
      <div class="row q-gutter-x-md items-center">
        <q-input
          filled
          class="col"
          v-model="mintWrappedDecimals"
          label="Decimals"
          type="number"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Ratio</div>
      <div class="row q-gutter-x-md items-center">
        <q-input
          filled
          class="col"
          v-model="ratioUnwrapped"
          label="Unwrapped"
          type="number"
        />
        <q-icon name="swap_horiz" size="xl  " />
        <q-input
          filled
          class="col"
          v-model="ratioWrapped"
          label="Wrapped"
          type="number"
        />
      </div>
    </q-card-section>

    <q-card-section class="row justify-end">
      <q-btn
        square
        color="primary"
        label="Create new wrapper"
        @click="createWrapper()"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
