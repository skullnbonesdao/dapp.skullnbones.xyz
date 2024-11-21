<script setup lang="ts">
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { checkAccountExists } from 'src/functions/checkAccountExists';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { Transaction } from '@solana/web3.js';
import {
  findPrizeVaultAddress,
  findTicketsAddress,
  findTicketsVaultAddress,
} from 'src/solana/raffle/RaffleInterface';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const props = defineProps(['raffle']);

async function close_raffle() {
  try {
    const tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    let raffle = props.raffle.publicKey;

    const tickets = findTicketsAddress(raffle);
    const ticketsVault = findTicketsVaultAddress(raffle);
    let prizeVault = findPrizeVaultAddress(raffle);

    if (!(await checkAccountExists(prizeVault))) prizeVault = null;

    tx.add(
      await pg_raffle?.methods
        .close()
        .accountsPartial({
          creator: getSigner(),
          raffle: raffle,
          tickets: tickets,
          ticketsVault: ticketsVault,
          prizeVault: prizeVault,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] close');
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
  <q-btn
    square
    color="primary"
    icon="send"
    label="Close Raffle"
    @click="close_raffle()"
  />
</template>

<style scoped lang="sass"></style>
