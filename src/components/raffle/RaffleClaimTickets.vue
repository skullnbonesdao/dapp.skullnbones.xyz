<script setup lang="ts">
import * as anchor from '@coral-xyz/anchor';
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { Transaction } from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const props = defineProps(['raffle', 'is_admin']);

async function collect_proceeds() {
  try {
    const tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    const ticketMint = new anchor.web3.PublicKey(
      props.raffle.account.ticketMint.toString(),
    );

    const ata = await getAssociatedTokenAddress(
      ticketMint,
      getSigner(),
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_PROGRAM_ID,
    );

    if ((await useRPCStore().connection.getAccountInfo(ata)) === null) {
      tx.add(
        createAssociatedTokenAccountInstruction(
          getSigner(),
          ata,
          getSigner(),
          ticketMint,
        ),
      );
    }

    tx.add(
      await pg_raffle?.methods
        .claimTickets()
        .accountsPartial({
          creator: getSigner(),
          raffle: props.raffle.publicKey,
          ticketsMint: ticketMint,
          to: ata,
        })
        .instruction(),
    );
    await handleTransaction(tx, '[Raffle Claim Tickets]');
    await useRaffleStore().updateStore();
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
      position: 'bottom-right',
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
