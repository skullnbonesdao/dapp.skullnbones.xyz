<script setup lang="ts">
import {
  RAFLLE_WHITELIST_NAME,
  WHITELIST_CREATOR_WALLET,
} from 'stores/globalStore';
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';

import { useRaffleStore } from 'stores/globalRaffle';
import { useGlobalWalletStore } from 'stores/globalWallet';
import { useRPCStore } from 'stores/rpcStore';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'tickets']);

async function buy_raffle_ticket() {
  //await useRaffleStore().update_raffles();
  await useGlobalWalletStore().update_accounts();

  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;
  const pg_whitelist = useWorkspaceAdapter()?.pg_whitelist.value;

  const ticketMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketMint.toString(),
  );

  const ata = (
    await useRPCStore().connection.getParsedTokenAccountsByOwner(
      useWallet().publicKey.value!,
      { mint: ticketMint },
    )
  ).value[0].pubkey;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [entrants, entrants_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    pg_raffle?.programId,
  );

  let [proceeds, proceeds_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('proceeds'), raffle.toBytes()],
    pg_raffle?.programId,
  );

  let [whitelist, whitelistBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      WHITELIST_CREATOR_WALLET.toBuffer(),
      anchor.utils.bytes.utf8.encode(RAFLLE_WHITELIST_NAME),
    ],
    pg_whitelist?.programId,
  );

  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [useWallet().publicKey.value!.toBytes(), whitelist.toBytes()],
      pg_whitelist?.programId,
    );

  try {
    const signature = await pg_raffle?.methods
      .buyTickets(new anchor.BN(input_raffle_ticket_amount.value))
      .accountsPartial({
        signer: useWallet().publicKey.value,
        raffle: raffle,
        entrant: useWallet().publicKey.value,
        ticketsMint: ticketMint,
        from: ata,

        whitelist: whitelist,
        whitelistEntry: anchor.web3.PublicKey.findProgramAddressSync(
          [useWallet().publicKey.value!.toBytes(), whitelist.toBytes()],
          pg_whitelist?.programId,
        )[0],
        whitelistProgram: pg_whitelist?.programId,
      })
      .rpc();
    console.log(signature);

    if (await handle_confirmation(signature)) {
      await useRaffleStore().send_buy_message_discord(
        props.raffle.account.name.toString(),
        `${
          parseInt(props.tickets.sold.toString()) +
          parseInt(input_raffle_ticket_amount.value.toString())
        }/${props.tickets?.total}`,
        input_raffle_ticket_amount.value,
      );

      await useRaffleStore().update_raffles();
      await useGlobalWalletStore().update_accounts();
    }
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
  <div class="col q-pa-sm q-gutter-y-sm">
    <p class="text-overline">Buy Ticket(s)</p>
    <div class="row">
      <q-input
        square
        filled
        outlined
        type="number"
        class="col"
        label="Amount"
        v-model="input_raffle_ticket_amount"
      >
      </q-input>
      <q-btn
        square
        color="primary"
        icon="send"
        @click="
          buy_raffle_ticket().then(() => {
            console.log('done sending!');
          })
        "
      />
    </div>
    <p class="text-caption text-right text-weight-thin">
      0.001◎ fee
      <q-tooltip anchor="bottom right" self="top middle">
        cover deployment costs
      </q-tooltip>
    </p>
  </div>
</template>

<style scoped lang="sass"></style>
