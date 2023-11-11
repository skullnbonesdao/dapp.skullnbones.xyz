<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import * as anchor from '@coral-xyz/anchor';
import { useWorkspaceWhitelist } from 'src/idls/adapter/whitelist_apapter';
import { Notify } from 'quasar';
import { PublicKey, SystemProgram } from '@solana/web3.js';

const { program } = useWorkspaceWhitelist();
const input_address = ref('3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1');
const whilelists = ref();
const whitelist_selected = ref();

onMounted(async () => {
  whilelists.value = await program.value.account.whitelist.all();
});

async function add_address_to_whitelist() {
  const whitelist = new PublicKey(whitelist_selected.value.publicKey);
  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [new PublicKey(input_address.value).toBytes(), whitelist.toBytes()],
      program.value.programId,
    );

  try {
    const address_to_add = new PublicKey(input_address.value);

    const signature = await program.value.methods
      .addToWhitelist(address_to_add)
      .accounts({
        entry: whitelistEntry,
        whitelist,
        authority: useWallet().publicKey.value,
        systemProgram: SystemProgram.programId,
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
      label="Address to be removed"
    />
    <q-btn color="primary" @click="add_address_to_whitelist()">Add</q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
