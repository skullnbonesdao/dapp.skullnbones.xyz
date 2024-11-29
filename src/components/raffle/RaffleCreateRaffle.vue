<script setup lang="ts">
import { ref } from 'vue';
import { Notify } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import { useGlobalStore } from '../../stores/globalStore';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { useRPCStore } from 'stores/rpcStore';

import { findRaffleAddress } from 'src/solana/raffle/RaffleInterface';
import { findWhitelistAddress } from 'src/solana/whitelist/WhitelistInterface';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import TokenSelectDropdown from 'components/dropdown/TokenSelectDropdown.vue';
import { useWhitelistStore } from '../../solana/whitelist/WhitelistStore';

const inputRaffleName = ref();
const input_raffle_description = ref();
const input_raffle_ticket_count = ref();
const inputRaffleTicketPrice = ref();
const input_account_selected = ref();

async function create_new_raffle() {
  try {
    const tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    const raffleSeed = new anchor.BN(
      window.crypto.getRandomValues(new Uint8Array(8)),
    );
    const raffle = findRaffleAddress(inputRaffleName.value, raffleSeed);
    const whitelist = findWhitelistAddress();

    const account_info = await useRPCStore().connection.getParsedAccountInfo(
      new anchor.web3.PublicKey(input_account_selected.value.mint),
    );

    tx.add(
      await pg_raffle?.methods
        .initialize(
          inputRaffleName.value,
          input_raffle_description.value,
          calcAmountToTransfer(
            inputRaffleTicketPrice.value,
            account_info.value?.data.parsed.info.decimals,
          ) as any,
          input_raffle_ticket_count.value,
          raffleSeed,
        )
        .accountsPartial({
          creator: getSigner(),
          raffle: raffle,
          ticketsMint: new anchor.web3.PublicKey(
            input_account_selected.value.mint,
          ),
          whitelist: useWhitelistStore().whitelistSelected.publicKey,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] Create');
    await useRaffleStore().updateStore();
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
  useAccountStore()
    .accounts.filter(
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
        v-model="inputRaffleName"
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

      <div class="">
        <TokenSelectDropdown
          label=""
          textbox-label="Token"
          @token_account_selected="(val) => (input_account_selected = val)"
        />
      </div>

      <q-input
        filled
        square
        v-model="input_raffle_ticket_count"
        type="number"
        label="Tickets Count"
      />

      <q-input
        filled
        square
        type="number"
        v-model="inputRaffleTicketPrice"
        label="Ticket Price"
      />
    </q-card-section>
    <q-separator />
    <q-card-section class="q-gutter-y-md">
      <p class="text-h5">Whitelist</p>
      <div class="col q-gutter-y-sm">
        <q-select
          class="full-width"
          filled
          square
          v-model="useWhitelistStore().whitelistSelected"
          clearable
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          behavior="menu"
          :option-label="(opt) => opt.account.name"
          label="Whitelist selcted"
          :options="useWhitelistStore().whitelists"
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
        square
        class="row"
        color="primary"
        @click="create_new_raffle()"
        label="Create"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
