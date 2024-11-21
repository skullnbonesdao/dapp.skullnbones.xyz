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
import {
  findMetadataAddress,
  findMintWrappedAddress,
  findVaultAddress,
  findWrapperAddress,
} from 'src/solana/wrapper/WrapperInterface';

const $q = useQuasar();
const optionUnwrapped = ref();
const mintWrappedDecimals = ref<number>(9);
const ratioUnwrapped = ref<number>(1);
const ratioWrapped = ref<number>(1);
const addMetadata = ref(true);
const metadataName = ref('');
const metadataSymbol = ref('');
const metadataURI = ref('');

async function createWrapper() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
    const seed = new anchor.BN(
      window.crypto.getRandomValues(new Uint8Array(8)),
    );

    const params = {
      ratio: [
        new anchor.BN(ratioUnwrapped.value),
        new anchor.BN(ratioWrapped.value),
      ],
      onlyCreatorCanUnwrap: false,
      wrappedDecimals: mintWrappedDecimals.value,
      seed: seed,
    };

    //Create Wrapper
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

    //Create Vault
    tx.add(
      await pg_wrapper.methods
        .createVault()
        .accountsPartial({
          signer: getSigner(),
          wrapper: findWrapperAddress(
            new PublicKey(optionUnwrapped.value.mint.toString()),
            getSigner(),
          ),
          vaultUnwrappedAta: findVaultAddress(
            findWrapperAddress(
              new PublicKey(optionUnwrapped.value.mint.toString()),
              getSigner(),
            ),
            new PublicKey(optionUnwrapped.value.mint.toString()),
          ),
          mintUnwrapped: new PublicKey(optionUnwrapped.value.mint.toString()),
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction(),
    );

    //Add Metadata Account

    if (addMetadata.value) {
      const metadata = {
        name: metadataName.value,
        symbol: metadataSymbol.value,
        uri: metadataURI.value,
      } as any;

      const wrapper = findWrapperAddress(
        new PublicKey(optionUnwrapped.value.mint.toString()),
        getSigner(),
      );

      const mintWrapped = findMintWrappedAddress(wrapper, seed);
      const metadataAccount = findMetadataAddress(mintWrapped);

      tx.add(
        await pg_wrapper.methods
          .metadataCreate(metadata)
          .accountsPartial({
            signer: getSigner(),
            wrapper: wrapper,
            mintWrapped: mintWrapped,
            mintUnwrapped: new PublicKey(optionUnwrapped.value.mint.toString()),
            metadata: metadataAccount,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .instruction(),
      );
    }

    await handleTransaction(
      tx,
      `[Wrapper] create + vault ${addMetadata.value ? '+ metadata' : ''}`,
    );
    await useWrapperStore().updateStore();
  } catch (err) {
    console.error(err);
    $q.notify({
      message: err.message,
      type: 'negative',
      position: 'bottom-right',
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
          square
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
          square
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
          square
          filled
          class="col"
          v-model="ratioUnwrapped"
          label="Unwrapped"
          type="number"
        />
        <q-icon name="swap_horiz" size="xl  " />
        <q-input
          square
          filled
          class="col"
          v-model="ratioWrapped"
          label="Wrapped"
          type="number"
        />
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row items-center">
        <div class="text-h6">Add Medata</div>
        <q-toggle
          v-model="addMetadata"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>
      <div v-if="addMetadata" class="row items-center q-gutter-x-sm">
        <q-input
          square
          filled
          class="col"
          v-model="metadataName"
          label="Name"
          type="text"
        />
        <q-input
          square
          filled
          class="col"
          v-model="metadataSymbol"
          label="Symbol"
          type="text"
        />
        <q-input
          square
          filled
          class="col"
          v-model="metadataURI"
          label="Image-URI"
          type="text"
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
