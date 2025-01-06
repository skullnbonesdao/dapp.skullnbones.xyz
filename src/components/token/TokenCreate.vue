<script setup lang="ts">
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

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
import { useRPCStore } from 'stores/rpcStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import * as splToken from '@solana/spl-token';
import { handleTransaction } from 'src/solana/handleTransaction';

const inputTokenMint = ref(Keypair.generate().publicKey.toString());
const inputTokenDecimals = ref(0);
const inputTokenAmount = ref(1);

async function create_new_token() {
  try {
    const tx = new Transaction();

    const tokenMint = new PublicKey(inputTokenMint.value);
    const decimals = parseInt(inputTokenDecimals.value.toString(), 10);
    const amount = inputTokenAmount.value;

    if (isNaN(decimals) || decimals < 0 || decimals > 9) {
      throw new Error('Invalid decimals value. It must be between 0 and 9.');
    }

    let ata = await getAssociatedTokenAddress(tokenMint, getSigner(), true);

    //Create Mint Account
    tx.add(
      SystemProgram.createAccount({
        fromPubkey: getSigner(),
        newAccountPubkey: tokenMint,
        space: MINT_SIZE,
        lamports: await getMinimumBalanceForRentExemptMint(
          useRPCStore().connection,
        ),
        programId: TOKEN_PROGRAM_ID,
      }),
    );

    //Create new Mint
    tx.add(
      createInitializeMintInstruction(
        tokenMint,
        decimals,
        getSigner(),
        getSigner(),
        splToken.TOKEN_PROGRAM_ID,
      ),
    );

    tx.add(
      createAssociatedTokenAccountInstruction(
        getSigner(), // payer
        ata, // ata
        getSigner(), // owner
        tokenMint, // mint
      ),
    );

    tx.add(
      createMintToCheckedInstruction(
        tokenMint,
        ata,
        getSigner(), // mint auth
        amount, // amount
        decimals, // decimals
      ),
    );

    await handleTransaction(tx, '[Token] Create');
  } catch (err) {
    Notify.create({
      position: 'bottom-right',
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <p class="text-h6">Create a new Token</p>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div class="col q-gutter-y-sm">
        <div class="row q-gutter-x-sm">
          <q-input
            class="col"
            filled
            square
            v-model="inputTokenMint"
            type="text"
            disable
            label="New Token Mint"
            dense
          />
          <q-btn
            color="primary"
            icon="refresh"
            @click="inputTokenMint = Keypair.generate().publicKey.toString()"
          ></q-btn>
        </div>

        <q-input
          filled
          square
          v-model="inputTokenDecimals"
          type="number"
          label="Decimals"
          dense
        />
        <q-input
          square
          filled
          v-model="inputTokenAmount"
          type="number"
          label="Initial amount"
          dense
        />
        <div class="row">
          <div class="col"></div>
          <q-btn
            color="primary"
            @click.prevent="create_new_token().then(() => {})"
            >Create
          </q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
