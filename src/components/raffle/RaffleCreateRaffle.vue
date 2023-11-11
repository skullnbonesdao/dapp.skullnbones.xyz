<script setup lang="ts">
import { ref } from 'vue';
import { SystemProgram, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { Notify } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useGlobalStore } from '../../stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';

const input_raffle_name = ref();
const input_raffle_description = ref();
const input_raffle_ticket_count = ref();
const input_raffle_ticket_price = ref();
const input_account_selected = ref();

async function create_new_raffle() {
  const { pg_raffle } = useWorkspaceAdapter();

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

  const proceedsMint = new anchor.web3.PublicKey(
    input_account_selected.value.account.data.parsed.info.mint.toString(),
  );

  const accoun_info =
    await useGlobalStore().connection.getParsedAccountInfo(proceedsMint);

  try {
    const signature = await pg_raffle.value.methods
      .createRaffle(
        input_raffle_name.value,
        input_raffle_description.value,
        new BN(input_raffle_ticket_price.value),
        new BN(accoun_info.value?.data.parsed.info.decimals),
        input_raffle_ticket_count.value,
      )
      .accounts({
        raffle: raffle,
        entrants: entrants,
        creator: useWallet().publicKey.value,
        proceeds: proceeds,
        proceedsMint: proceedsMint,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
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
  <q-card flat bordered class="col q-pa-md">
    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Raffle</p>
      <q-input outlined v-model="input_raffle_name" type="text" label="Name" />
      <q-input
        outlined
        v-model="input_raffle_description"
        type="text"
        label="Description"
      />
    </q-card-section>
    <q-separator />

    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Tickets</p>

      <div class="row justify-center">
        <q-btn-dropdown
          class="col"
          color="primary"
          :label="
            input_account_selected
              ? input_account_selected.account.data.parsed.info.mint
              : 'Select Ticket Token Mint'
          "
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="input_account_selected = account"
              :key="account"
              v-for="account in useGlobalStore().token_accounts"
            >
              {{ account.account.data.parsed.info.mint }}
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <q-input
        outlined
        v-model="input_raffle_ticket_count"
        type="number"
        label="Tickets"
      />

      <q-input
        outlined
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
