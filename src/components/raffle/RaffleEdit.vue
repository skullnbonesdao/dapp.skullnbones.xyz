<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Transaction } from '@solana/web3.js';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { Notify } from 'quasar';

const raffleName = ref('');
const raffleDescription = ref('');
const raffleURL = ref('');

const props = defineProps(['raffle']);

onMounted(() => {
  raffleName.value = props.raffle.account.name;
  raffleDescription.value = props.raffle.account.description;
  raffleURL.value = props.raffle.account.url;
});

async function editRaffle() {
  const tx = new Transaction();

  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;

  try {
    tx.add(
      await pg_raffle?.methods
        .edit(
          raffleName.value as never,
          raffleDescription.value as never,
          raffleURL.value as never,
        )
        .accountsPartial({
          creator: getSigner(),
          raffle: props.raffle.publicKey,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] update');
    await useRaffleStore().updateStore();
  } catch (err) {
    Notify.create({
      color: 'danger',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div>
    <q-input square filled label="Name" v-model="raffleName" />
    <q-input square filled label="Description" v-model="raffleDescription" />
    <q-input square filled label="Image-URL" v-model="raffleURL" />
    <q-btn
      square
      class="full-width"
      color="primary"
      label="Update"
      @click="editRaffle()"
    ></q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
