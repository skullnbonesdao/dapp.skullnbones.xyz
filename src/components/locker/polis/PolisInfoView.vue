<script setup lang="ts">
import { findEscrowATA } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { findProxyATA } from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import PolisLockerEscrowInfo from 'components/locker/polis/PolisLockerEscrowInfo.vue';
import PolisLockerProxyInfo from 'components/locker/polis/PolisLockerProxyInfo.vue';
import PolisLockerProxyEscrowInfo from 'components/locker/polis/PolisLockerProxyEscrowInfo.vue';
import PolisLockerATAInfo from 'components/locker/polis/PolisLockerATAInfo.vue';
import { onMounted, watch } from 'vue';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';

import { getSigner } from 'src/solana/squads/SignerFinder';
import { findEscrowHistory } from '../../../solana/staratlas/locker/polis/SnapshotsInterface';

onMounted(async () => {
  await usePolisLockerStore().updateStore();
});

watch(
  () => getSigner(),
  async () => {
    await usePolisLockerStore().updateStore();
  },
);
</script>

<template>
  <q-card flat bordered square>
    <q-card-section class="row items-center q-gutter-x-md">
      <div>
        <q-img width="100px" src="/currencies/POLIS.webp" />
      </div>

      <div>
        <div class="text-h5">Polis Locker</div>
        <div class="text-subtitle1 text-weight-light">
          View and check your locker info...
        </div>
      </div>
    </q-card-section>

    <q-separator />
    <q-card-section class="q-gutter-md">
      <q-list class="rounded-borders">
        <PolisLockerEscrowInfo />

        <PolisLockerProxyInfo />

        <PolisLockerProxyEscrowInfo />

        <PolisLockerATAInfo label="Escrow ATA" :address="findEscrowATA()[0]" />

        <PolisLockerATAInfo label="Proxy ATA" :address="findProxyATA()[0]" />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
