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
import AtlasLockerInfo from 'components/locker/atlas/AtlasLockerInfo.vue';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import RegisteredStakeInfo from 'components/locker/atlas/RegisteredStakeInfo.vue';

onMounted(async () => {
  await useAtlasLockerStore().updateStore();
});

watch(
  () => getSigner(),
  async () => {
    await useAtlasLockerStore().updateStore();
  },
);
</script>

<template>
  <q-card flat bordered square>
    <q-card-section class="row items-center q-gutter-x-md">
      <div>
        <q-img width="100px" src="/currencies/ATLAS.webp" />
      </div>

      <div>
        <div class="text-h6">ATLAS Locker</div>
        <div class="text-subtitle2">View and check your locker info...</div>
      </div>
    </q-card-section>

    <q-separator />
    <q-card-section class="q-gutter-md">
      <q-list class="rounded-borders">
        <RegisteredStakeInfo
          name="ATLAS"
          :address="useAtlasLockerStore().registeredStakeAtlas"
        />
        <RegisteredStakeInfo
          name="Polis"
          :address="useAtlasLockerStore().registeredStakePolis"
        />
        <AtlasLockerInfo />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
