<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_wallet_connected } from 'components/messages/handle_wallet_connected';

const { pg_whitelist } = useWorkspaceAdapter();
const input_address = ref('');
const whilelists = ref();
const whitelist_selected = ref();

onMounted(async () => {
  whilelists.value = await pg_whitelist.value.account.whitelist.all();
});

async function remove_address_from_whitelist() {
  handle_wallet_connected();

  const whitelist = new anchor.web3.PublicKey(
    whitelist_selected.value.publicKey,
  );
  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [
        new anchor.web3.PublicKey(input_address.value).toBytes(),
        whitelist.toBytes(),
      ],
      pg_whitelist.value.programId,
    );

  try {
    console.log(pg_whitelist.value.methods);
    const address_to_remove = new anchor.web3.PublicKey(input_address.value);

    const signature = await pg_whitelist.value.methods
      .removeFromWhitelist(address_to_remove)
      .accounts({
        entry: whitelistEntry,
        whitelist,
        authority: useWallet().publicKey.value,
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
    <q-btn color="primary" @click="remove_address_from_whitelist()"
      >Remove</q-btn
    >
  </div>
</template>

<style scoped lang="sass"></style>
