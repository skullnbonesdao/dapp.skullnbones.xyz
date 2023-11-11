<script setup lang="ts">
import {
  Connection,
  Keypair,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { useGlobalStore } from 'stores/globalStore';
import { AnchorProvider, Wallet } from '@coral-xyz/anchor';
import {
  createAssociatedTokenAccountInstruction,
  createInitializeMintInstruction,
  createMintToCheckedInstruction,
  getAssociatedTokenAddress,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { ref } from 'vue';

const token_mint = ref(Keypair.generate());
const token_decimals = ref(0);
const token_amount = ref(100);

async function create_new_token() {
  const wallet = useAnchorWallet();
  const connection = useGlobalStore().connection as Connection;
  const { publicKey, sendTransaction } = useWallet();
  if (!publicKey.value) return;

  const provider = new AnchorProvider(connection, wallet.value as Wallet, {
    commitment: 'processed',
  });

  // let mint = Keypair.generate();
  let ata = await getAssociatedTokenAddress(
    token_mint.value.publicKey,
    publicKey.value,
    false
  );

  let transaction = new Transaction();

  // Create account
  transaction.add(
    SystemProgram.createAccount({
      fromPubkey: publicKey.value,
      newAccountPubkey: token_mint.value.publicKey,
      space: MINT_SIZE,
      lamports: await getMinimumBalanceForRentExemptMint(connection),
      programId: TOKEN_PROGRAM_ID,
    })
  );
  // Init Mint
  transaction.add(
    createInitializeMintInstruction(
      token_mint.value.publicKey, // mint pubkey
      token_decimals.value, // decimals
      publicKey.value, // mint authority (an auth to mint token)
      null // freeze authority (we use null first, the auth can let you freeze user's token account)
    )
  );

  // Create User token account
  transaction.add(
    createAssociatedTokenAccountInstruction(
      publicKey.value, // payer
      ata, // ata
      publicKey.value, // owner
      token_mint.value.publicKey // mint
    )
  );

  transaction.add(
    createMintToCheckedInstruction(
      token_mint.value.publicKey,
      ata,
      publicKey.value, // mint auth
      token_amount.value, // amount
      token_decimals.value // decimals
    )
  );

  console.log('token_mint = ' + token_mint.value.publicKey);
  console.log('ATA = ', ata.toString());

  wallet.value?.signTransaction(transaction);
  // let simulationResult = await provider.simulate(transaction);
  let signature = await sendTransaction(transaction, connection, {
    skipPreflight: true,
    signers: [token_mint.value],
  });
  // console.log(simulationResult);
  console.log(signature);

  Notify.create({
    message: 'TX-Signature: ' + signature,
    timeout: 5000,
  });
}
</script>

<template>
  <div>
    <p class="text-h6">Create a new Token</p>
  </div>
  <div class="col q-gutter-y-md">
    <div class="row q-gutter-x-md">
      <q-input
        class="col"
        dark
        v-model="token_mint.publicKey"
        type="text"
        label="New Token Mint"
        dense
      />
      <q-btn
        color="primary"
        icon="refresh"
        @click="token_mint = Keypair.generate()"
      ></q-btn>
    </div>

    <q-input
      dark
      v-model="token_decimals"
      type="number"
      label="Decimals"
      dense
    />
    <q-input
      dark
      v-model="token_amount"
      type="number"
      label="Initial amount"
      dense
    />
    <q-btn color="primary" @click.prevent="create_new_token().then(() => {})"
      >Create new Token
    </q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
