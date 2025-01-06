<script setup lang="ts">
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

import {
  createAssociatedTokenAccountInstruction,
  createBurnCheckedInstruction,
  createInitializeMintInstruction,
  createMintToCheckedInstruction,
  getAssociatedTokenAddress,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  uiAmountToAmount,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { ref } from 'vue';
import { useRPCStore } from 'stores/rpcStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import * as splToken from '@solana/spl-token';
import { handleTransaction } from 'src/solana/handleTransaction';

const inputTokenMint = ref('');
const inputTokenDecimals = ref(0);
const inputTokenAmount = ref(1);

async function tokensMint() {
  try {
    const tx = new Transaction();

    const tokenMint = new PublicKey(inputTokenMint.value);

    const accountInfo =
      await useRPCStore().connection.getParsedAccountInfo(tokenMint);

    const decimals = accountInfo.value?.data.parsed.info.decimals;
    const amount = inputTokenAmount.value;

    let ata = await getAssociatedTokenAddress(tokenMint, getSigner(), false);

    tx.add(
      createMintToCheckedInstruction(
        tokenMint,
        ata,
        getSigner(), // mint auth
        amount * Math.pow(10, decimals), // amount
        decimals, // decimals
      ),
    );

    await handleTransaction(tx, '[Token] Mint');
  } catch (err) {
    Notify.create({
      position: 'bottom-right',
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}

async function tokensBurn() {
  try {
    const tx = new Transaction();

    const tokenMint = new PublicKey(inputTokenMint.value);

    const accountInfo =
      await useRPCStore().connection.getParsedAccountInfo(tokenMint);

    const decimals = accountInfo.value?.data.parsed.info.decimals;
    const amount = inputTokenAmount.value;

    let ata = await getAssociatedTokenAddress(tokenMint, getSigner(), false);

    tx.add(
      createBurnCheckedInstruction(
        tokenMint,
        ata,
        getSigner(), // mint auth
        amount * Math.pow(10, decimals), // amount
        decimals, // decimals
      ),
    );

    await handleTransaction(tx, '[Token] Burn');
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
      <p class="text-h6">Mint additional tokens</p>
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
            label="Token Mint"
            dense
          />
        </div>

        <q-input
          square
          filled
          v-model="inputTokenAmount"
          type="number"
          label="Amount"
          dense
        />
        <div class="row q-gutter-x-sm">
          <div class="col"></div>
          <q-btn color="primary" @click.prevent="tokensBurn().then(() => {})"
            >Burn
          </q-btn>
          <q-btn color="primary" @click.prevent="tokensMint().then(() => {})"
            >Mint
          </q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
