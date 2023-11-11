<script setup lang="ts">
import {
  DAPP_ADMIN_WALLET,
  NULL_WALLET,
  useGlobalStore,
} from 'stores/globalStore';

import * as anchor from '@coral-xyz/anchor';
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { Connection, Transaction } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';

const props = defineProps(['raffle', 'is_admin']);

async function claim_raffle() {
  const { pg_raffle } = useWorkspaceAdapter();

  const prizeTokenMint = new anchor.web3.PublicKey(
    props.raffle.account.prizeTokenMint.toString(),
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

  if ((await useGlobalStore().connection.getAccountInfo(ata)) === null) {
    let tx = new Transaction();
    tx.add(
      createAssociatedTokenAccountInstruction(
        useWallet().publicKey.value!,
        ata,
        winner,
        prizeTokenMint,
      ),
    );

    await useWallet().sendTransaction(
      tx,
      useGlobalStore().connection as Connection,
    );
  }

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [entrants, entrants_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  let [prize_vault, prize_vault_bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('vault'), raffle.toBytes()],
      pg_raffle.value.programId,
    );

  console.log(props.raffle.account.name);

  try {
    const signature = await pg_raffle.value.methods
      .claimPrize(props.raffle.account.name)
      .accounts({
        creator: DAPP_ADMIN_WALLET,
        raffle: raffle,
        entrants: entrants,
        prizeVault: prize_vault,
        prizeMint: prizeTokenMint,
        to: ata,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .rpc();

    console.log(signature);
    Notify.create({
      message: 'TX-Signature: ' + signature,
      timeout: 5000,
    });
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
    class="col"
    v-if="raffle.account.winner != NULL_WALLET && is_admin"
    color="primary"
    label="Claim Prize"
    @click="claim_raffle()"
  />
</template>

<style scoped lang="sass"></style>
