<script setup lang="ts">
import { ref, watch } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import BurningTicket from 'components/video/BurningTicket.vue';
import { SYSVAR_RECENT_BLOCKHASHES_PUBKEY, Transaction } from '@solana/web3.js';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { handleTransaction } from 'src/solana/handleTransaction';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'is_admin']);
const showDrawingAnimation = ref(false);

watch(
  () => showDrawingAnimation.value,
  () => {
    if (showDrawingAnimation.value == false) {
      useRaffleStore().updateStore();
    }
  },
);

async function reveal_raffle_winner() {
  try {
    const tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

    let [tickets, tickets_bump] = anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('tickets'), raffle.toBytes()],
      pg_raffle?.programId,
    );

    tx.add(
      await pg_raffle?.methods
        .revealWinners()
        .accounts({
          raffle: raffle,
          tickets: tickets,
          recentBlockHashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] reveal winner');

    showDrawingAnimation.value = true;
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
  <q-btn
    square
    class="row"
    color="primary"
    icon="send"
    label="Reveal Winner"
    @click="reveal_raffle_winner()"
  />

  <q-dialog :maximized="true" v-model="showDrawingAnimation">
    <q-card flat square class="">
      <q-card-section>
        <div class="text-h6 text-center">Drawing...</div>
      </q-card-section>

      <q-card-section class="q-pt-none row">
        <q-space />
        <BurningTicket />
        <q-space />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="close"
          color="primary"
          v-close-popup
          @click="useRaffleStore().update_raffles()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
