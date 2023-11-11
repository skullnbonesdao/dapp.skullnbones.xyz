<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { SYSVAR_RECENT_BLOCKHASHES_PUBKEY } from '@solana/web3.js';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'is_admin']);

async function reveal_raffle_winner() {
  const { pg_raffle, pg_whitelist } = useWorkspaceAdapter();

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [entrants, entrants_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  try {
    const signature = await pg_raffle.value.methods
      .revealWinners()
      .accounts({
        raffle: raffle,
        entrants: entrants,
        recentBlockHashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
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
    <q-btn
      class="row"
      v-if="
        is_admin &&
        raffle.account.isRunning &&
        raffle.account?.randomness === null
      "
      color="primary"
      label="Reveal Winner"
      @click="reveal_raffle_winner()"
    />
  </div>
</template>

<style scoped lang="sass"></style>
