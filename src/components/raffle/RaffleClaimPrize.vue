<script setup lang="ts">
import * as anchor from '@coral-xyz/anchor';
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { Transaction } from '@solana/web3.js';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { useRPCStore } from 'stores/rpcStore';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { findPrizeVaultAddress } from 'src/solana/raffle/RaffleInterface';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const props = defineProps(['raffle', 'is_admin']);

async function claim_raffle() {
  try {
    let tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    const prizeTokenMint = new anchor.web3.PublicKey(
      props.raffle.account.prizeMint.toString(),
    );

    const winner = new anchor.web3.PublicKey(
      props.raffle.account.winner.toString(),
    );

    const ata = await getAssociatedTokenAddress(
      prizeTokenMint,
      winner,
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_PROGRAM_ID,
    );

    if ((await useRPCStore().connection.getAccountInfo(ata)) === null) {
      tx.add(
        createAssociatedTokenAccountInstruction(
          getSigner(),
          ata,
          winner,
          prizeTokenMint,
        ),
      );
    }

    const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());
    const prizeVault = findPrizeVaultAddress(raffle);

    tx.add(
      await pg_raffle?.methods
        .claimPrize()
        .accountsPartial({
          raffle: raffle,
          prizeMint: prizeTokenMint,
          prizeVault: prizeVault,
          to: ata,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] Claim Prize');
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
    label="Claim Prize"
    @click="claim_raffle()"
  />
</template>

<style scoped lang="sass"></style>
