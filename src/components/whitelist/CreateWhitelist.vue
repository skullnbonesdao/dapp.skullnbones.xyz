<script setup lang="ts">
import { ref } from 'vue';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import { useGlobalStore } from 'stores/globalStore';
import { Connection, SystemProgram } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { DappWhitelist } from 'src/idls/dapp_whitelist';
import * as idl from 'src/idls/dapp_whitelist.json';
import * as anchor from '@coral-xyz/anchor';
import wallet from 'boot/wallet';
import {
  initWorkspace,
  useWorkspaceWhitelist,
} from 'src/idls/adapter/whitelist_apapter';
import { Notify } from 'quasar';

const whitelist_name = ref('My new whitelist');

async function create_whitelist() {
  const { program } = useWorkspaceWhitelist();

  let [whitelist, whitelistBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      useWallet().publicKey.value!.toBytes(),
      anchor.utils.bytes.utf8.encode(whitelist_name.value),
    ],
    program.value.programId,
  );

  try {
    const signature = await program.value.methods
      .initialize(whitelist_name.value)
      .accounts({
        whitelist,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log(signature);

    Notify.create({
      message: 'TX-Signature: ' + signature,
      timeout: 5000,
    });
  } catch (err) {
    Notify.create({
      color: 'red',
      message: 'Error sending tx!',
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
