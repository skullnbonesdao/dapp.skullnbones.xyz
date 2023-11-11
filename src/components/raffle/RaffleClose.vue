<script setup lang="ts">
import * as anchor from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';

const props = defineProps(['raffle']);

async function close_raffle() {
  const { pg_raffle } = useWorkspaceAdapter();

  let [raffle, raffle_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('raffle'),
      anchor.utils.bytes.utf8.encode(props.raffle.account.name),
    ],
    pg_raffle.value.programId,
  );

  let [entrants, entrants_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  let [proceeds, proceeds_bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('proceeds'), raffle.toBytes()],
    pg_raffle.value.programId,
  );

  let [prize_vault, prize_vault_bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('vault'), raffle.toBytes()],
      pg_raffle.value.programId,
    );

  try {
    const signature = await pg_raffle.value.methods
      .closeRaffle(props.raffle.account.name)
      .accounts({
        creator: useWallet().publicKey.value,
        entrants: entrants,
        raffle: raffle,
        proceeds: proceeds,
        prizeVault: prize_vault,
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
  <q-btn class="col" size="md" color="primary" @click="close_raffle()"
    >Close Raffle</q-btn
  >
</template>

<style scoped lang="sass"></style>
