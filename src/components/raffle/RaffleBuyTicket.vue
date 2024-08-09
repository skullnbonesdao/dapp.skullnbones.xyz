<script setup lang="ts">
import {
  WHITELIST_CREATOR_WALLET,
  RAFLLE_WHITELIST_NAME,
  useGlobalStore,
  FEE_WALLET,
} from 'stores/globalStore';
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { SystemProgram } from '@solana/web3.js';

import { DiscordMessageType, useRaffleStore } from 'stores/globalRaffle';
import { useGlobalWalletStore } from 'stores/globalWallet';
import { useRPCStore } from 'stores/rpcStore';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'is_admin', 'entrants']);

async function buy_raffle_ticket() {
  await useRaffleStore().update_raffles();
  await useGlobalWalletStore().update_accounts();

  const { pg_raffle, pg_whitelist } = useWorkspaceAdapter();

  const proceedsMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketTokenMint.toString(),
  );

  const ata = (
    await useRPCStore().connection.getParsedTokenAccountsByOwner(
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
      WHITELIST_CREATOR_WALLET.toBuffer(),
      anchor.utils.bytes.utf8.encode(RAFLLE_WHITELIST_NAME),
    ],
    pg_whitelist.value.programId,
  );

  const [whitelistEntry, entryBump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [useWallet().publicKey.value!.toBytes(), whitelist.toBytes()],
      pg_whitelist.value.programId,
    );

  try {
    const signature = await pg_raffle.value.methods
      .buyTickets(
        new BN(input_raffle_ticket_amount.value),
        RAFLLE_WHITELIST_NAME,
        WHITELIST_CREATOR_WALLET,
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
        feeAccount: FEE_WALLET,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    console.log(signature);

    if (await handle_confirmation(signature)) {
      await useRaffleStore().send_buy_message_discord(
        props.raffle.account.name.toString(),
        `${
          parseInt(props.entrants.total.toString()) +
          parseInt(input_raffle_ticket_amount.value.toString())
        }/${props.entrants?.max}`,
        input_raffle_ticket_amount.value,
      );

      await useRaffleStore().update_raffles();
      await useGlobalWalletStore().update_accounts();

      // await useRaffleStore().send_discord_webhook(
      //   DiscordMessageType.TICKET_BUY,
      //   props.raffle.account.name.value,
      //   props.raffle.account.description.value,
      //   input_raffle_ticket_amount.value,
      // );
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
  <div
    v-if="
      !is_admin &&
      !raffle?.account.randomness &&
      !(entrants?.total == entrants?.max)
    "
    class="col q-pa-sm q-gutter-y-sm"
  >
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
