<script setup lang="ts">
import { computed, ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';

import { useRPCStore } from 'stores/rpcStore';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { findWhitelistAddress } from 'src/solana/whitelist/WhitelistInterface';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import AccountBalance from 'components/AccountBalance.vue';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'tickets']);

const disabled = computed(() => {
  return useWallet().publicKey.value ? false : true;
});

async function buy_raffle_ticket() {
  const tx = new Transaction();

  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;
  const pg_whitelist = useWorkspaceAdapter()?.pg_whitelist.value;

  const ticketMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketMint.toString(),
  );

  const ata = (
    await useRPCStore().connection.getParsedTokenAccountsByOwner(getSigner(), {
      mint: ticketMint,
    })
  ).value[0].pubkey;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());
  let whitelist = findWhitelistAddress();

  try {
    tx.add(
      await pg_raffle?.methods
        .buyTickets(new anchor.BN(input_raffle_ticket_amount.value))
        .accountsPartial({
          signer: getSigner(),
          raffle: raffle,
          entrant: getSigner(),
          ticketsMint: ticketMint,
          from: ata,
          whitelist: whitelist,
          whitelistEntry: anchor.web3.PublicKey.findProgramAddressSync(
            [getSigner()?.toBytes(), whitelist.toBytes()],
            pg_whitelist?.programId,
          )[0],
          whitelistProgram: pg_whitelist?.programId,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] buy ticket');
    await useRaffleStore().updateStore();
  } catch (err) {
    Notify.create({
      color: 'danger',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div v-if="!disabled" class="col q-pa-sm q-gutter-y-sm">
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
        :disable="!input_raffle_ticket_amount"
        color="primary"
        icon="send"
        @click="buy_raffle_ticket()"
      />
    </div>
    <div class="row">
      <q-space />
      <p class="text-caption text-right text-weight-thin">
        0.001◎ fee
        <q-tooltip anchor="bottom right" self="top middle">
          cover deployment costs
        </q-tooltip>
      </p>
    </div>
    <div class="col">
      <AccountBalance :mint="raffle.account.ticketMint" />
    </div>
  </div>
  <div v-else class="row full-width justify-center">
    <WalletMultiButton class="" dark />
  </div>
</template>

<style scoped lang="sass"></style>
