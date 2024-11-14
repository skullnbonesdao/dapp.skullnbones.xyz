<script setup lang="ts">
import { ref } from 'vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

const $q = useQuasar();
const optionUnwrapped = ref();
const mintWrappedDecimals = ref<number>(9);
const ratioUnwrapped = ref<number>(1);
const ratioWrapped = ref<number>(1);

const options = ref([
  { name: 'PX4', mint: 'B8MFK4agivn1tDa2KtYZxmyPsuZepn1ZQ4KEuzZanAMV' },
  { name: 'ATLAS', mint: 'B8MFK4agivn1tDa2KtYZxmyPsuZepn1ZQ4KEuzZanAMV' },
]);

async function createWrapper() {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      const params = {
        ratio: [
          new anchor.BN(ratioUnwrapped.value),
          new anchor.BN(ratioWrapped.value),
        ],
        onlyCreatorCanUnwrap: false,
        wrappedDecimals: mintWrappedDecimals,
      };

      await pg_wrapper.methods
        .initialize(params as any)
        .accountsPartial({
          signer: useWallet().publicKey.value,
          mintUnwrapped: new PublicKey(optionUnwrapped.value.mint.toString()),
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();
    }

    $q.notify({
      message: 'Created new wrapper factory successfully',
      type: 'positive',
    });
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
          :options="options"
          :option-label="(option) => option.name"
          v-model="optionUnwrapped"
          label="Mint"
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

    <q-card-actions>
      <q-btn
        class="full-width"
        color="primary"
        label="Create"
        @click="createWrapper()"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
