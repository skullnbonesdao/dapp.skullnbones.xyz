<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';
import FormatNumber from 'components/text/FormatNumber.vue';

onMounted(async () => {
  if (useWallet().publicKey.value)
    await useStarAtlasLockerStore().setAccounts();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useStarAtlasLockerStore().setAccounts();
  },
);

const decimals = ref(2);
const padStart = ref(8);
</script>

<template>
  <q-card class="" flat>
    <q-card-section>
      <div class="row">
        <div class="col-3">Wallet</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().atlas_balance_wallet)
              "
            />
            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().polis_balance_wallet)
              "
            />

            <div>Polis</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">Squads</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().atlas_balance_squads)
              "
            />

            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().polis_balance_squads)
              "
            />

            <div>Polis</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">Locker</div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().atlas_balance_locker)
              "
            />

            <div>Atlas</div>
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <FormatNumber
              :decimals="decimals"
              :pad-start="padStart"
              :number="
                parseFloat(useStarAtlasLockerStore().polis_balance_locker)
              "
            />

            <div>Polis</div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
