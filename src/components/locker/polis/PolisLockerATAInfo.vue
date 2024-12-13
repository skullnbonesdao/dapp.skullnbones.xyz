<script setup lang="ts">
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { PublicKey } from '@solana/web3.js';
import { onMounted, ref, watch } from 'vue';
import { useRPCStore } from 'stores/rpcStore';
import { findProxyATA } from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { findEscrowATA } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import FormatNumber from 'components/text/FormatNumber.vue';

const props = defineProps({
  label: {
    type: String,
  },
  address: {
    type: PublicKey,
    required: true,
  },
});

const accountInfo = ref();

watch(
  () => getSigner(),
  async () => {
    await fetchAccountInfo();
  },
);

onMounted(async () => {
  await fetchAccountInfo();
});

async function fetchAccountInfo() {
  try {
    accountInfo.value = (await useRPCStore().connection.getTokenAccountBalance(
      props.address,
    )) as any;
  } catch (error) {}
}
</script>

<template>
  <q-expansion-item expand-separator>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge :account-exists="accountInfo" />
      </q-item-section>

      <q-item-section> {{ label }} </q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ address }}</div>
          <SolscanLink :address="address" />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col text-uppercase">Balance</div>
          <FormatNumber
            pad-start="15"
            decimals="4"
            :number="accountInfo?.value?.uiAmount"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
