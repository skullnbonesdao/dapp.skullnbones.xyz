<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Notify } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import {
  useGlobalStore,
  WHITELIST_CREATOR_WALLET,
} from '../../stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useGlobalWalletStore } from '../../stores/globalWallet';

import { DiscordMessageType, useRaffleStore } from 'stores/globalRaffle';
import { useRPCStore } from 'stores/rpcStore';
import { useWhitelist } from 'stores/globalWhitelist';

const input_raffle_name = ref();
const input_raffle_description = ref();
const input_raffle_ticket_count = ref();
const input_raffle_ticket_price = ref();
const input_account_selected = ref();
const whitelist_selected = ref<{ label: string; value: string | null }>();
const whitelist_options = ref<{ label: string; value: string | null }[]>([]);

onMounted(() => update_whitelists());
watch(
  () => useWhitelist().whitelists,
  () => update_whitelists(),
);

function update_whitelists() {
  useWhitelist().whitelists.forEach((whitelist) => {
    whitelist_options.value.push({
      label: 'Crew',
      value: whitelist.publicKey.toString(),
    });
  });
  whitelist_options.value.push({ label: 'none', value: null });
  whitelist_selected.value = whitelist_options.value.find(
    (entry) => entry.label == 'Crew',
  );
}

async function create_new_raffle() {
  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;
  const pg_whitelist = useWorkspaceAdapter()?.pg_whitelist.value;

  const raffleSeed = new anchor.BN(
    window.crypto.getRandomValues(new Uint8Array(8)),
  );

  //Accounts
  let [raffle, raffle_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('raffle'),
      anchor.utils.bytes.utf8.encode(input_raffle_name.value),
      raffleSeed.toArrayLike(Buffer).reverse(),
    ],
    pg_raffle?.programId,
  );

  let [whitelist, whitelistBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      WHITELIST_CREATOR_WALLET.toBuffer(),
      anchor.utils.bytes.utf8.encode(whitelist_selected.value?.label),
    ],
    pg_whitelist?.programId,
  );

  const account_info = await useRPCStore().connection.getParsedAccountInfo(
    new anchor.web3.PublicKey(input_account_selected.value.value),
  );

  try {
    const signature = await pg_raffle?.methods
      .initialize(
        input_raffle_name.value,
        input_raffle_description.value,
        new BN(
          input_raffle_ticket_price.value *
            Math.pow(10, account_info.value?.data.parsed.info.decimals),
        ),
        input_raffle_ticket_count.value,
        raffleSeed,
      )
      .accountsPartial({
        creator: useWallet().publicKey.value,
        raffle: raffle,
        ticketsMint: new anchor.web3.PublicKey(
          input_account_selected.value.value,
        ),
        whitelist: whitelist,
      })
      .rpc();

    console.log(signature);

    if (await handle_confirmation(signature)) {
      await useRaffleStore().update_raffles();
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

const options = ref<any[]>([]);

const stringOptions = ref(
  useGlobalWalletStore()
    .token_accounts.filter(
      (account) => account.account.data.parsed.info.tokenAmount.uiAmount > 0,
    )
    .flatMap((account) => account.account.data.parsed.info.mint),
);

stringOptions.value.forEach((o) => {
  const label =
    useGlobalStore().token_list.find((t) => t.address == o)?.name ??
    o +
      ' [' +
      useGlobalStore().token_list.find((t) => t.address == o)?.symbol ??
    '' + ']';

  options.value.push({
    label: label,
    value: o,
  });
});
</script>

<template>
  <q-card square flat class="col q-pa-sm" style="max-width: 800px">
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
          style="width: 250px"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-btn
          icon="refresh"
          color="primary"
          square
          @click="useGlobalWalletStore().update_accounts()"
        ></q-btn>
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
    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Whitelist</p>

      <div class="col q-gutter-y-sm">
        <q-select
          class="full-width"
          filled
          square
          v-model="whitelist_selected"
          clearable
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          behavior="menu"
          label="Whitelist selcted"
          :options="whitelist_options"
          style="width: 250px"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="row justify-end">
      <q-btn
        icon="send"
        class="row"
        color="primary"
        @click="create_new_raffle()"
        label="Create"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
