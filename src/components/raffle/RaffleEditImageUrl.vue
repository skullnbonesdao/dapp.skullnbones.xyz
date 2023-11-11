<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';

const input_prize_count = ref(1);
const input_prize_url = ref('');
const input_account_selected = ref();

const props = defineProps(['raffle', 'is_admin']);

async function edit_image_url() {
  const { pg_raffle } = useWorkspaceAdapter();

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  try {
    const signature = await pg_raffle.value.methods
      .editUrl(input_prize_url.value)
      .accounts({
        raffle: raffle,
        creator: useWallet().publicKey.value,
      })
      .rpc();

    console.log(signature);
    Notify.create({
      message: 'TX-Signature: ' + signature,
      timeout: 5000,
    });
    handle_confirmation(signature);
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
  <div
    class="col q-gutter-y-md q-pb-md"
    v-if="
      is_admin &&
      raffle.account.prizeTokenMint.toString() !=
        '11111111111111111111111111111111'
    "
  >
    <q-separator />
    <p class="text-h5">Image URL</p>

    <div class="row q-gutter-x-sm">
      <q-input
        class="col"
        outlined
        v-model="input_prize_url"
        type="text"
        label="Image-URL"
      />
      <q-btn class="col-2" size="md" color="primary" @click="edit_image_url()"
        >Apply</q-btn
      >
    </div>

    <q-separator />
  </div>
</template>

<style scoped lang="sass"></style>
