<script setup lang="ts">
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { useAtlasLockerStore } from '../../../solana/staratlas/locker/atlas/AtlasLockerStore';
import { onMounted, ref, watch } from 'vue';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useRPCStore } from 'stores/rpcStore';
import { ATLAS_DECIMALS } from 'src/solana/staratlas/locker/atlas/consts';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';

const props = defineProps(['address', 'name']);
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
        <AccountBadge :account-exists="address ? true : false"
      /></q-item-section>

      <q-item-section>Registered Stake {{ name }}</q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ address }}</div>
          <SolscanLink :address="address" />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section
        v-if="useAtlasLockerStore().registeredStakeAtlasAddressInfo"
      >
        <div
          class="row"
          v-for="info in Object.keys(
            useAtlasLockerStore().registeredStakeAtlasAddressInfo,
          )"
          :key="info"
        >
          <div class="col text-uppercase">
            {{ info }}
          </div>

          <div>
            {{ useAtlasLockerStore().registeredStakeAtlasAddressInfo[info] }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
