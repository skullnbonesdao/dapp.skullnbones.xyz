<script setup lang="ts">
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { useRaffleStore } from 'stores/globalRaffle';

const props = defineProps(['raffle']);

async function start_stop_raffle() {
  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

  let raffle = await pg_raffle?.account.raffle.fetch(props.raffle.publicKey);

  console.log(raffle);
  console.log(Object.keys(raffle.state)[0]);
  try {
    let signature = undefined;
    switch (Object.keys(raffle.state)[0]) {
      case 'ready':
        signature = await pg_raffle?.methods
          .enable()
          .accountsPartial({
            creator: useWallet().publicKey.value,
            raffle: props.raffle.publicKey,
          })
          .rpc();
        break;
      case 'paused':
        signature = await pg_raffle?.methods
          .enable()
          .accountsPartial({
            creator: useWallet().publicKey.value,
            raffle: props.raffle.publicKey,
          })
          .rpc();
        break;
      case 'running':
        signature = await pg_raffle?.methods
          .disable()
          .accountsPartial({
            creator: useWallet().publicKey.value,
            raffle: props.raffle.publicKey,
          })
          .rpc();
        break;
    }

    console.log(signature);
    if (signature) await handle_confirmation(signature);
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
    icon="send"
    label="Start/Stop"
    square
    color="primary"
    @click="start_stop_raffle()"
  ></q-btn>
</template>

<style scoped lang="sass"></style>
