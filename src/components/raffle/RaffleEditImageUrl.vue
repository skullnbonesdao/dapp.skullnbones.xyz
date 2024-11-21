<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { getSigner } from 'src/solana/squads/SignerFinder';

const input_prize_url = ref('');

const props = defineProps(['raffle', 'is_admin']);

async function edit_image_url() {
  try {
    const tx = new Transaction();
    const { pg_raffle } = useWorkspaceAdapter();

    const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

    tx.add(
      await pg_raffle.value.methods
        .editUrl(input_prize_url.value)
        .accounts({
          raffle: raffle,
          creator: getSigner(),
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] edit metadata');
    await useRaffleStore().updateStore();
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
    class="q-pa-sm"
    v-if="
      is_admin &&
      raffle.account.prizeTokenMint.toString() !=
        '11111111111111111111111111111111'
    "
  >
    <div class="row">
      <q-input
        square
        filled
        class="col"
        outlined
        maxlength="100"
        v-model="input_prize_url"
        type="text"
        label="Image-URL"
      />
      <q-btn square icon="send" color="primary" @click="edit_image_url()" />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
