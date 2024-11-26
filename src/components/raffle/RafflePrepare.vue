<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';

import { useRPCStore } from 'stores/rpcStore';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import TokenSelectDropdown from 'components/dropdown/TokenSelectDropdown.vue';

const input_prize_count = ref(1);
const input_prize_url = ref('');
const prize_account_selected = ref('');

const props = defineProps(['raffle']);

const options = ref<any[]>([]);

async function add_prize_to_raffle() {
  try {
    const tx = new Transaction();

    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    const prize_mint = new anchor.web3.PublicKey(
      prize_account_selected.value.mint,
    );

    const ata = (
      await useRPCStore().connection.getParsedTokenAccountsByOwner(
        getSigner(),
        { mint: prize_mint },
      )
    ).value[0].pubkey;

    const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

    const account_info =
      await useRPCStore().connection.getParsedAccountInfo(prize_mint);

    console.log(account_info.value?.data.parsed.info.decimals);

    input_prize_url.value =
      useGlobalStore().token_list.find((token) => token.address == prize_mint)
        ?.logoURI ?? '';

    tx.add(
      await pg_raffle?.methods
        .prepare(
          new BN(
            input_prize_count.value *
              Math.pow(10, account_info.value?.data.parsed.info.decimals),
          ),
          input_prize_url.value,
        )
        .accountsPartial({
          creator: getSigner(),
          raffle: raffle,
          from: ata,
          prizeMint: prize_mint,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] prepare');
    await useRaffleStore().updateStore();
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
  <div class="col q-pa-sm">
    <p class="text-overline">Add a prize:</p>
    <div class="col q-gutter-y-sm">
      <TokenSelectDropdown
        label=""
        textbox-label="Select prize"
        @token_account_selected="(val) => (prize_account_selected = val)"
      />

      <div class="row">
        <q-input
          class="col"
          filled
          square
          v-model="input_prize_count"
          type="number"
          label="Count"
        />
        <q-btn
          filled
          square
          class="col-2"
          color="primary"
          icon="send"
          @click="add_prize_to_raffle()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
