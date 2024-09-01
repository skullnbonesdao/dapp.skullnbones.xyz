<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';

onMounted(async () => {
  await useStarAtlasLockerStore().setAccounts();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useStarAtlasLockerStore().setAccounts();
  },
);
</script>

<template>
  <q-card class="">
    <q-card-section>
      <div class="row">
        <div class="col-3">Wallet</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>
              {{ useStarAtlasLockerStore().atlas_balance_wallet }}
            </div>
            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>{{ useStarAtlasLockerStore().polis_balance_wallet }}</div>
            <div>Polis</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">Squads</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>{{ useStarAtlasLockerStore().atlas_balance_squads }}</div>
            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>{{ useStarAtlasLockerStore().polis_balance_squads }}</div>
            <div>Polis</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">Locker</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>{{ useStarAtlasLockerStore().atlas_balance_locker }}</div>
            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <div>{{ useStarAtlasLockerStore().polis_balance_locker }}</div>
            <div>Polis</div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
