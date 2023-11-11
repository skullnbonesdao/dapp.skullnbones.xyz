<script setup lang="ts">
import {
  DAPP_ADMIN_WALLET,
  RAFLLE_WHITELIST_NAME,
  useGlobalStore,
} from 'stores/globalStore';
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'is_admin', 'entrants']);

async function buy_raffle_ticket() {
  const { pg_raffle, pg_whitelist } = useWorkspaceAdapter();

  const proceedsMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketTokenMint.toString(),
  );

  const ata = (
    await useGlobalStore().connection.getParsedTokenAccountsByOwner(
      useWallet().publicKey.value!,
      { mint: proceedsMint },
    )
  ).value[0].pubkey;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [entrants, entrants_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  let [proceeds, proceeds_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('proceeds'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  let [whitelist, whitelistBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      DAPP_ADMIN_WALLET.toBuffer(),
      anchor.utils.bytes.utf8.encode(RAFLLE_WHITELIST_NAME),
    ],
    pg_whitelist.value.programId,
  );

  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [useWallet().publicKey.value!.toBytes(), whitelist.toBytes()],
      pg_whitelist.value.programId,
    );

  console.log('---');
  console.log(whitelist.toString());

  console.log(raffle.toString());
  console.log(entrants.toString());

  console.log(proceeds.toString());
  console.log(proceedsMint.toString());
  console.log(ata.toString());

  try {
    const signature = await pg_raffle.value.methods
      .buyTickets(
        new BN(input_raffle_ticket_amount.value),
        RAFLLE_WHITELIST_NAME,
        DAPP_ADMIN_WALLET,
      )
      .accounts({
        raffle: raffle,
        entrants: entrants,
        proceeds: proceeds,
        proceedsMint: proceedsMint,
        from: ata,
        transferAuth: useWallet().publicKey.value,
        tokenProgram: TOKEN_PROGRAM_ID,
        whitelist: whitelist,
        entry: whitelistEntry,
        whitelistProgram: pg_whitelist.value.programId,
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
  <div
    v-if="
      !is_admin &&
      !raffle?.account.randomness &&
      !(entrants?.total == entrants?.max)
    "
    class="col q-pa-sm q-gutter-y-md"
  >
    <p class="text-h5">Buy Ticket(s)</p>
    <div class="row q-gutter-x-sm">
      <q-input
        outlined
        type="number"
        class="col"
        label="Amount"
        v-model="input_raffle_ticket_amount"
      />
      <q-btn color="primary" icon="send" @click="buy_raffle_ticket()" />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
