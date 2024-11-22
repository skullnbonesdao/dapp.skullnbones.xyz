<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';
import {
  findMetadataAddress,
  findMintWrappedAddress,
  findVaultAddress,
  findWrapperAddress,
} from 'src/solana/wrapper/WrapperInterface';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';

const $q = useQuasar();
const filterOptions = ref(['list', 'address']);
const filterOption = ref('list');
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
      onlyCreatorCanWrap: false,
      onlyCreatorCanUnwrap: false,
      wrappedDecimals: mintWrappedDecimals.value,
      seed: seed,
    };

    const mintUnwrapped = new PublicKey(optionUnwrapped.value.mint.toString());

    //Create Wrapper
    tx.add(
      await pg_wrapper.methods
        .initialize(params as any)
        .accountsPartial({
          signer: getSigner(),
          group: new PublicKey(
            useWrapperStore().groupSelected?.publicKey.toString() ?? '',
          ),
          mintUnwrapped: mintUnwrapped,
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
          wrapper: findWrapperAddress(mintUnwrapped, getSigner()),
          vaultUnwrappedAta: findVaultAddress(
            findWrapperAddress(mintUnwrapped, getSigner()),
            mintUnwrapped,
          ),
          mintUnwrapped: mintUnwrapped,
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

      const wrapper = findWrapperAddress(mintUnwrapped, getSigner());
      const mintWrapped = findMintWrappedAddress(wrapper, seed);
      const metadataAccount = findMetadataAddress(mintWrapped);

      tx.add(
        await pg_wrapper.methods
          .metadataCreate(metadata)
          .accountsPartial({
            signer: getSigner(),
            wrapper: wrapper,
            mintWrapped: mintWrapped,
            mintUnwrapped: mintUnwrapped,
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

const tokenOptions = ref<
  [
    {
      name: string;
      symbol: string;
      mint: string;
    },
  ]
>(mapTokens2TokenOptions());

watch(
  () => filterOption.value,
  () => (tokenOptions.value = mapTokens2TokenOptions()),
);

function mapTokens2TokenOptions() {
  return filterOption.value == 'list'
    ? useTokenListStore().tokenList.map((t) => {
        return {
          name: t.name,
          symbol: t.symbol,
          mint: t.address,
        };
      })
    : useAccountStore().getAccountsBalanceNotZero?.map((t) => {
        return {
          name: t.info?.name,
          symbol: t.info?.symbol,
          mint: t.mint,
        };
      });
}

function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    tokenOptions.value = mapTokens2TokenOptions().filter(
      (v) => JSON.stringify(v).toLowerCase().indexOf(needle) > -1,
    );
  });
}
</script>

<template>
  <q-card flat>
    <q-card-section class="">
      <div class="row items-center">
        <div class="col text-h6">Unwrapped Token</div>
        <div class="row items-center">
          <div class="col text-right q-mr-md text-subtitle2">Filter:</div>
          <q-tabs dense v-model="filterOption" class="text-teal">
            <q-tab
              v-for="fo in filterOptions"
              :name="fo"
              :label="fo"
              :key="fo"
            />
          </q-tabs>
        </div>
      </div>
      <div class="row q-gutter-x-md items-center">
        <q-select
          filled
          square
          class="col"
          use-input
          hide-selected
          fill-input
          @filter="filterFn"
          :options="tokenOptions"
          :option-label="
            (option) =>
              option.name ? `[${option.symbol}] ${option.name}` : option.mint
          "
          v-model="optionUnwrapped"
          label="Token to Wrap"
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
