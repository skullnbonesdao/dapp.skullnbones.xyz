<script setup lang="ts">
import { ref } from 'vue';
import { Connection, SystemProgram } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { handle_wallet_connected } from 'components/messages/handle_wallet_connected';

const whitelist_name = ref('My new whitelist');

async function create_whitelist() {
  handle_wallet_connected();

  const { pg_whitelist } = useWorkspaceAdapter();

  let [whitelist, whitelistBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      useWallet().publicKey.value!.toBytes(),
      anchor.utils.bytes.utf8.encode(whitelist_name.value),
    ],
    pg_whitelist.value.programId,
  );

  try {
    const signature = await pg_whitelist.value.methods
      .initialize(whitelist_name.value)
      .accounts({
        whitelist,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log(signature);
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}

//anchor.setProvider(provider);
</script>

<template>
  <div class="row q-gutter-x-md">
    <q-input class="col" v-model="whitelist_name"></q-input>
    <q-btn color="primary" @click="create_whitelist()">Create</q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
