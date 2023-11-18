<script setup lang="ts">
import { computed, ref } from 'vue';
import { SystemProgram, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { Notify } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  WHITELIST_CREATOR_WALLET,
  RAFLLE_WHITELIST_NAME,
  useGlobalStore,
  FEE_WALLET,
} from '../../stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useGlobalWalletStore } from '../../stores/globalWallet';

import { DiscordMessageType, useRaffleStore } from 'stores/globalRaffle';

const input_raffle_name = ref();
const input_raffle_description = ref();
const input_raffle_ticket_count = ref();
const input_raffle_ticket_price = ref();
const input_account_selected = ref();

async function create_new_raffle() {
  const { pg_raffle, pg_whitelist } = useWorkspaceAdapter();

  let [raffle, raffle_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('raffle'),
      anchor.utils.bytes.utf8.encode(input_raffle_name.value),
    ],
    pg_raffle.value.programId,
  );

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

  const account_info = await useGlobalStore().connection.getParsedAccountInfo(
    new anchor.web3.PublicKey(input_account_selected.value),
  );

  try {
    const signature = await pg_raffle.value.methods
      .createRaffle(
        input_raffle_name.value,
        input_raffle_description.value,
        new BN(
          input_raffle_ticket_price.value *
            Math.pow(10, account_info.value?.data.parsed.info.decimals),
        ),
        new BN(account_info.value?.data.parsed.info.decimals),
        input_raffle_ticket_count.value,
      )
      .accounts({
        raffle: raffle,
        entrants: entrants,
        creator: useWallet().publicKey.value,
        proceeds: proceeds,
        proceedsMint: new anchor.web3.PublicKey(input_account_selected.value),
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        whitelist: whitelist,
        feeAccount: FEE_WALLET,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log(signature);

    if (await handle_confirmation(signature)) {
      await useRaffleStore().send_discord_webhook(
        DiscordMessageType.RAFFLE_CREATE,
        input_raffle_name.value,
        input_raffle_description.value,
        input_raffle_ticket_count.value,
        input_raffle_ticket_price.value,
      );
    }
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}

const options = ref();

const stringOptions = ref(
  useGlobalWalletStore().token_accounts.flatMap(
    (account) => account.account.data.parsed.info.mint,
  ),
);

options.value = stringOptions.value;

function filterFn(val: any, update: any) {
  if (val === '') {
    update(() => {
      options.value = stringOptions.value;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.value.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1,
    );
  });
}
</script>

<template>
  <q-card square flat class="col q-pa-sm">
    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Raffle</p>
      <q-input
        filled
        square
        v-model="input_raffle_name"
        type="text"
        label="Name"
      />
      <q-input
        filled
        square
        v-model="input_raffle_description"
        type="text"
        label="Description"
      />
    </q-card-section>
    <q-separator />

    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Tickets</p>

      <div class="row justify-center">
        <q-select
          class="col"
          filled
          square
          v-model="input_account_selected"
          clearable
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          behavior="menu"
          label="Select Ticket by mint"
          :options="options"
          @filter="filterFn"
          style="width: 250px"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>

      <q-input
        filled
        square
        v-model="input_raffle_ticket_count"
        type="number"
        label="Tickets"
      />

      <q-input
        filled
        square
        type="number"
        v-model="input_raffle_ticket_price"
        label="Ticket Price"
      />
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-btn class="row" color="primary" @click="create_new_raffle()"
        >Create</q-btn
      >
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
