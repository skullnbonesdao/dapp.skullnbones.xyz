<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { handle_wallet_connected } from 'components/messages/handle_wallet_connected';

const { pg_whitelist } = useWorkspaceAdapter();

const input_address = ref('3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1');
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
    const signature = await pg_whitelist.value.methods
      .deleteWhitelist(whitelist_selected.value.account.name)
      .accounts({
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
  <div class="row">
    <q-btn-dropdown
      square
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

    <q-btn square color="primary" @click="remove_address_from_whitelist()"
      >Delete</q-btn
    >
  </div>
</template>

<style scoped lang="sass"></style>
