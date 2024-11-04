<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import BurningTicket from 'components/video/BurningTicket.vue';
import { SYSVAR_RECENT_BLOCKHASHES_PUBKEY } from '@solana/web3.js';
import { useRaffleStore } from 'stores/globalRaffle';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'is_admin']);
const show_drawing_animation = ref(false);

async function reveal_raffle_winner() {
  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [tickets, tickets_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('tickets'), raffle.toBytes()],
    pg_raffle?.programId,
  );

  try {
    const signature = await pg_raffle?.methods
      .revealWinners()
      .accounts({
        raffle: raffle,
        tickets: tickets,
        recentBlockHashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
      })
      .rpc();

    console.log(signature);
    await handle_confirmation(signature);
    show_drawing_animation.value = true;
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

  <q-dialog :maximized="true" v-model="show_drawing_animation">
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
