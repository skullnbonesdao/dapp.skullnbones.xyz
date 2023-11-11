<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { Connection, Keypair, Transaction } from '@solana/web3.js';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import {
  createMintToCheckedInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import TokenCreate from 'components/token/TokenCreate.vue';
import TokenMetadata from 'components/token/TokenMetadata.vue';

const selected_tab = ref('create');

const token_account = ref();
const token_decimals = ref(0);
const token_amount = ref(100);
const token_mint = ref(Keypair.generate());

const wallet_token_accounts = ref();

onMounted(async () => {
  if (!useWallet().publicKey.value) return;
  wallet_token_accounts.value = await useGlobalStore().get_wallet_accounts();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    if (!useWallet().publicKey.value) return;
    wallet_token_accounts.value = await useGlobalStore().get_wallet_accounts();
  }
);

function onItemClick(account: string | undefined) {
  token_account.value = account;
}

async function create_more_token() {
  const wallet = useAnchorWallet();
  const connection = useGlobalStore().connection as Connection;
  const { publicKey, sendTransaction } = useWallet();
  if (!publicKey.value) return;

  let ata = await getAssociatedTokenAddress(
    token_mint.value.publicKey,
    publicKey.value,
    false
  );

  const transaction = new Transaction();
  transaction.add(
    createMintToCheckedInstruction(
      token_mint.value.publicKey,
      ata,
      publicKey.value, // mint auth
      token_amount.value, // amount
      token_decimals.value // decimals
    )
  );

  let signature = await sendTransaction(transaction, connection, {
    skipPreflight: true,
  });
  console.log(signature);

  Notify.create({
    message: 'TX-Signature: ' + signature,
    timeout: 5000,
  });
}
</script>

<template>
  <q-page class="col text-center justify-evenly q-ma-md q-gutter-y-md">
    <div class="text-h3">Token Management</div>

    <q-card dark>
      <q-tabs v-model="selected_tab" dense class="text-white" align="justify">
        <q-tab name="create" label="Create" />
        <q-tab name="metadata" label="Metadata" />
        <q-tab name="mint" label="Mint" />
        <q-tab name="close" label="Close" />
      </q-tabs>

      <q-separator />

      <q-tab-panels dark v-model="selected_tab" animated>
        <q-tab-panel name="create">
          <TokenCreate />
        </q-tab-panel>
        <q-tab-panel name="metadata">
          <TokenMetadata />
        </q-tab-panel>

        <q-tab-panel name="mint">
          <div class="col q-gutter-y-md">
            <q-input
              class="col"
              dark
              v-model="token_mint.publicKey"
              type="text"
              label="Token Mint"
              dense
            />
            <q-input
              dark
              v-model="token_amount"
              type="number"
              label="Minting amount"
              dense
            />
            <q-btn
              color="primary"
              @click.prevent="create_more_token().then(() => {})"
              >Mint more Tokens
            </q-btn>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
