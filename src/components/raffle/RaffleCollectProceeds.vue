<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
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

const input_prize_count = ref();
const input_account_selected = ref();

const props = defineProps(['raffle', 'is_admin']);

async function collect_proceeds() {
  const { pg_raffle } = useWorkspaceAdapter();

  const mint = new anchor.web3.PublicKey(
    props.raffle.account.ticketTokenMint.toString(),
  );

  const ata = await getAssociatedTokenAddress(
    mint,
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
        mint,
      ),
    );

    await useWallet().sendTransaction(
      tx,
      useRPCStore().connection as Connection,
    );
  }

  let [raffle, raffle_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('raffle'),
      anchor.utils.bytes.utf8.encode(props.raffle.account.name),
    ],
    pg_raffle.value.programId,
  );

  let [proceeds, proceeds_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('proceeds'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  try {
    const signature = await pg_raffle.value.methods
      .collectProceeds(props.raffle.account.name)
      .accounts({
        creator: useWallet().publicKey.value,
        raffle: raffle,
        proceeds: proceeds,
        proceedsMint: mint,
        to: ata,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .rpc();

    console.log(signature);

    await handle_confirmation(signature);
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
    v-if="props.is_admin && raffle.account.isClaimed"
    color="primary"
    @click="collect_proceeds()"
    >Collect Proceeds</q-btn
  >
</template>

<style scoped lang="sass"></style>
