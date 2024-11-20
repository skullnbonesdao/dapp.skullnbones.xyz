<script setup lang="ts">
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getSigner } from 'src/solana/squads/SignerFinder';

const props = defineProps(['raffle']);

async function start_stop_raffle() {
  try {
    const tx = new Transaction();
    const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

    let raffle = await pg_raffle?.account.raffle.fetch(props.raffle.publicKey);

    console.log(raffle);
    console.log(Object.keys(raffle.state)[0]);

    let signature = undefined;
    switch (Object.keys(raffle.state)[0]) {
      case 'ready':
        tx.add(
          await pg_raffle?.methods
            .enable()
            .accountsPartial({
              creator: getSigner(),
              raffle: props.raffle.publicKey,
            })
            .instruction(),
        );
        await handleTransaction(tx, '[Raffle] enable');
        break;
      case 'paused':
        tx.add(
          await pg_raffle?.methods
            .enable()
            .accountsPartial({
              creator: getSigner(),
              raffle: props.raffle.publicKey,
            })
            .instruction(),
        );

        await handleTransaction(tx, '[Raffle] enable');
        break;
      case 'running':
        tx.add(
          await pg_raffle?.methods
            .disable()
            .accountsPartial({
              creator: getSigner(),
              raffle: props.raffle.publicKey,
            })
            .instruction(),
        );
        await handleTransaction(tx, '[Raffle] disable');
        break;
    }

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
    icon="send"
    label="Start/Pause"
    square
    color="primary"
    @click="start_stop_raffle()"
  ></q-btn>
</template>

<style scoped lang="sass"></style>
