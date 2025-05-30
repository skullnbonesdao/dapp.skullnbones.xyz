<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { PublicKey, SystemProgram } from '@solana/web3.js';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { handle_wallet_connected } from 'components/messages/handle_wallet_connected';

const { pg_whitelist } = useWorkspaceAdapter();

const input_address = ref('');
const whilelists = ref();
const whitelist_selected = ref();

onMounted(async () => {
  whilelists.value = await pg_whitelist.value.account.whitelist.all();
});

async function add_address_to_whitelist() {
  handle_wallet_connected();

  const whitelist = new PublicKey(
    whitelist_selected.value.publicKey.toString(),
  );
  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [new PublicKey(input_address.value).toBytes(), whitelist.toBytes()],
      pg_whitelist.value.programId,
    );

  try {
    const address_to_add = new PublicKey(input_address.value);

    const signature = await pg_whitelist.value.methods
      .addToWhitelist(address_to_add)
      .accounts({
        entry: whitelistEntry,
        whitelist,
        authority: useWallet().publicKey.value,
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
</script>

<template>
  <div class="row">
    <q-btn-dropdown
      color="primary"
      square
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
      filled
      v-model="input_address"
      label="Address to be added"
    />
    <q-btn
      :disable="input_address.length == 0"
      square
      color="primary"
      @click="add_address_to_whitelist()"
      >Add</q-btn
    >
  </div>
</template>

<style scoped lang="sass"></style>
