<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { Connection, Transaction } from '@solana/web3.js';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useRPCStore } from 'stores/rpcStore';
import { useRaffleStore } from 'stores/globalRaffle';

const input_prize_count = ref();
const input_account_selected = ref();

const props = defineProps(['raffle', 'is_admin']);

async function collect_proceeds() {
  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

  const ticketMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketMint.toString(),
  );

  const ata = await getAssociatedTokenAddress(
    ticketMint,
    useWallet().publicKey.value!,
    true,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_PROGRAM_ID,
  );

  if ((await useRPCStore().connection.getAccountInfo(ata)) === null) {
    let tx = new Transaction();
    tx.add(
      createAssociatedTokenAccountInstruction(
        useWallet().publicKey.value!,
        ata,
        useWallet().publicKey.value!,
        ticketMint,
      ),
    );

    await useWallet().sendTransaction(
      tx,
      useRPCStore().connection as Connection,
    );
  }

  try {
    const signature = await pg_raffle?.methods
      .claimTickets()
      .accountsPartial({
        creator: useWallet().publicKey.value,
        raffle: props.raffle.publicKey,
        ticketsMint: ticketMint,
        to: ata,
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
    color="primary"
    icon="send"
    label="Claim Tickets"
    @click="collect_proceeds()"
  />
</template>

<style scoped lang="sass"></style>
