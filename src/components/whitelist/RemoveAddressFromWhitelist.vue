<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { AnchorProvider, Idl, Program } from '@coral-xyz/anchor';
import { RPC_NETWORKS, useGlobalStore } from 'stores/globalStore';
import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
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

const { program } = useWorkspaceWhitelist();
const input_address = ref('3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1');
const whilelists = ref();
const whitelist_selected = ref();

onMounted(async () => {
  whilelists.value = await program.value.account.whitelist.all();
});

async function remove_address_from_whitelist() {
  const whitelist = new anchor.web3.PublicKey(
    whitelist_selected.value.publicKey,
  );
  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [
        new anchor.web3.PublicKey(input_address.value).toBytes(),
        whitelist.toBytes(),
      ],
      program.value.programId,
    );

  try {
    console.log(program.value.methods);
    const address_to_remove = new anchor.web3.PublicKey(input_address.value);

    const signature = await program.value.methods
      .removeFromWhitelist(address_to_remove)
      .accounts({
        entry: whitelistEntry,
        whitelist,
        authority: useWallet().publicKey.value,
      })
      .rpc();

    console.log(signature);

    Notify.create({
      message: 'TX-Signature: ' + signature,
      timeout: 5000,
    });
  } catch (err) {
    console.log(err);
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div class="row q-gutter-x-md">
    <q-btn-dropdown
      color="primary"
      :label="whitelist_selected?.account.name ?? 'please select a whitelist'"
    >
      <q-list>
        <q-item
          clickable
          v-close-popup
          :key="whitelist"
          v-for="whitelist in whilelists"
          @click="whitelist_selected = whitelist"
        >
          <q-item-section>
            <q-item-label>{{ whitelist?.account.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-input
      class="col"
      outlined
      v-model="input_address"
      label="Address to be added"
    />
    <q-btn color="primary" @click="remove_address_from_whitelist()"
      >Remove</q-btn
    >
  </div>
</template>

<style scoped lang="sass"></style>
