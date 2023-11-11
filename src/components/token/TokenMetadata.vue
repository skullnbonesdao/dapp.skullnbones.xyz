<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { onMounted, ref, watch } from 'vue';
import TokenSelectDropdown from 'components/dropdown/TokenSelectDropdown.vue';
import { useWallet } from 'solana-wallets-vue';
import { Metaplex } from '@metaplex-foundation/js';
import { Connection, PublicKey } from '@solana/web3.js';

const token_selected = ref();
const token_metadata = ref();

const token_metadata_name = ref('xxx');
const token_metadata_symbol = ref('xxx');
const token_metadata_uri = ref('');

onMounted(async () => {
  await useGlobalStore().update_wallet_accounts();
});

watch(
  () => token_selected.value,
  () => {
    const mint = new PublicKey(
      token_selected.value.account.data.parsed.info.mint,
    );

    new Metaplex(useGlobalStore().connection as Connection)
      .nfts()
      .findByMint({
        mint,
      })
      .then((data) => (token_metadata.value = data));
  },
);

/*async function apply_metadata() {
  const mint = token_selected.value.account.data.parsed.info.mint;

  const metadata_seeds = [
    Buffer.from('metadata'),
    MPL_TOKEN_METADATA_PROGRAM_ID,
    new PublicKey(mint),
  ];
  const [metadata_pda, _bump] = PublicKey.findProgramAddressSync(
    metadata_seeds,
    MPL_TOKEN_METADATA_PROGRAM_ID
  );

  const transaction = new Transaction();
  transaction.add();

  console.log('apply');
}*/
</script>

<template>
  <qcard class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs" v-if="token_selected">
        <div class="text-h5 q-pt-sm text-left">Token</div>
        <div class="text-uppercase text-left q-mt-sm q-mb-xs">
          Token Account Data
        </div>
        <div class="col text-caption text-left text-grey">
          <div class="row">
            <div class="col">Mint:</div>
            <div class="col">
              {{ token_selected?.account.data.parsed.info.mint }}
            </div>
          </div>

          <div class="row">
            <div class="col">Account:</div>
            <div class="col">{{ token_selected?.pubkey }}</div>
          </div>

          <div class="row">
            <div class="col">AccountOwner:</div>
            <div
              class="col"
              :class="
                token_selected?.account.data.parsed.info.owner ==
                useWallet().publicKey.value.toString()
                  ? 'text-green'
                  : ''
              "
            >
              {{ token_selected?.account.data.parsed.info.owner }}
            </div>
          </div>
        </div>

        <div class="text-uppercase text-left q-mt-sm q-mb-xs">
          Token Metadata
        </div>

        <div class="row">
          <div class="col q-gutter-y-sm">
            <q-input label="Name" dense v-model="token_metadata_name"></q-input>
            <q-input
              label="Symbol"
              dense
              v-model="token_metadata_symbol"
            ></q-input>
            <q-input dense label="uri" v-model="token_metadata_uri"></q-input>
            <q-btn color="primary" label="Apply"></q-btn>
          </div>
        </div>
        {{ token_metadata }}
      </q-card-section>
      <q-space />
      <q-card-section class="col-3 flex flex-center">
        <q-img
          v-if="token_selected"
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions class="q-gutter-x-md">
      <TokenSelectDropdown
        @token_account_selected="(selected) => (token_selected = selected)"
      />
    </q-card-actions>
  </qcard>
</template>

<style scoped lang="sass"></style>
