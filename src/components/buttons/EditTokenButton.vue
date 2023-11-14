<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAssociatedTokenAddress,
  createCloseAccountInstruction,
  TOKEN_PROGRAM_ID,
  createBurnInstruction,
} from '@solana/spl-token';
import * as spl from '@solana/spl-token';
import { useWallet } from 'solana-wallets-vue';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { Notify } from 'quasar';

const show_modal = ref(false);

const props = defineProps(['mint', 'decimals', 'amount']);
const input_receiver = ref('');
const input_amount = ref(0);

async function burn_token() {
  const tx = new Transaction();

  const ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    useWallet().publicKey.value,
  );

  tx.add(
    createBurnInstruction(
      ata,
      new PublicKey(props.mint),
      useWallet().publicKey.value,
      props.amount * Math.pow(10, props.decimals),
    ),
  );

  tx.add(
    createCloseAccountInstruction(
      ata,
      useWallet().publicKey.value,
      useWallet().publicKey.value,
    ),
  );

  //Fee TX
  if (useGlobalStore().fee_wallet)
    tx.add(
      SystemProgram.transfer({
        fromPubkey: useWallet().publicKey.value,
        toPubkey: new PublicKey(useGlobalStore().fee_wallet),
        lamports: 10000,
      }),
    );

  try {
    const signature = await useWallet().sendTransaction(
      tx,
      useGlobalStore().connection as Connection,
    );
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}

async function close_account() {
  const tx = new Transaction();

  const ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    useWallet().publicKey.value,
  );

  tx.add(
    createCloseAccountInstruction(
      ata,
      useWallet().publicKey.value,
      useWallet().publicKey.value,
    ),
  );

  //Fee TX
  if (useGlobalStore().fee_wallet)
    tx.add(
      SystemProgram.transfer({
        fromPubkey: useWallet().publicKey.value!,
        toPubkey: new PublicKey(useGlobalStore().fee_wallet),
        lamports: 10000,
      }),
    );

  try {
    const signature = await useWallet().sendTransaction(
      tx,
      useGlobalStore().connection as Connection,
    );
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <q-btn size="sm" icon="edit" @click="show_modal = true"></q-btn>

  <q-dialog v-model="show_modal">
    <q-card>
      <q-toolbar class="q-mt-md">
        <q-avatar>
          <q-icon name="edit" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">Close/Burn Account</span>
          <div class="text-overline">{{ mint }}</div>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="q-gutter-y-md col justify-around">
        <q-btn
          class="full-width"
          icon="fireplace"
          color="red"
          @click="burn_token()"
        >
          Burn and close Account
        </q-btn>
        <q-btn
          :disabled="amount > 0"
          class="full-width"
          icon="fireplace"
          color="orange"
          @click="close_account()"
        >
          Close Account</q-btn
        >
      </q-card-section>

      <div class="q-ma-md text-right text-weight-light">fee: 0.00001sol</div>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
