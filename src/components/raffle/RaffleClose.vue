<script setup lang="ts">
import * as anchor from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { checkAccountExists } from 'src/functions/checkAccountExists';
import { useRaffleStore } from 'stores/globalRaffle';

const props = defineProps(['raffle']);

async function close_raffle() {
  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

  let raffle = props.raffle.publicKey;

  let [tickets, tickets_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('tickets'), raffle.toBytes()],
    pg_raffle?.programId,
  );

  let [ticketsVault, proceeds_bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('vaultTickets'), raffle.toBytes()],
      pg_raffle?.programId,
    );

  let [prizeVault, prize_vault_bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('vaultPrize'), raffle.toBytes()],
      pg_raffle?.programId,
    );

  if (!(await checkAccountExists(prizeVault))) prizeVault = null;

  try {
    const signature = await pg_raffle?.methods
      .close()
      .accountsPartial({
        creator: useWallet().publicKey.value,
        raffle: raffle,
        tickets: tickets,
        ticketsVault: ticketsVault,
        prizeVault: prizeVault,
      })
      .rpc();

    console.log(signature);
    await handle_confirmation(signature);
    await useRaffleStore().update_raffles();
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
