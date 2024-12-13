<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { getSigner } from 'src/solana/squads/SignerFinder';
import AtlasLockerInfo from 'components/locker/atlas/AtlasLockerStakingAccountInfo.vue';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import RegisteredStakeInfo from 'components/locker/atlas/RegisteredStakeInfo.vue';
import AtlasLockerStakingAccountInfo from 'components/locker/atlas/AtlasLockerStakingAccountInfo.vue';

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
        <div class="text-h4">ATLAS Locker</div>
        <div class="text-subtitle1 text-weight-light">
          View and check your locker info...
        </div>
      </div>
    </q-card-section>

    <q-separator />
    <q-card-section class="q-gutter-md">
      <q-list class="rounded-borders">
        <RegisteredStakeInfo
          name="ATLAS"
          :address="useAtlasLockerStore().registeredStakeAtlasAddress"
        />

        <AtlasLockerStakingAccountInfo />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
