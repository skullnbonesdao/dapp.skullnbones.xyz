<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';
import FormatNumber from 'components/text/FormatNumber.vue';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';

const props = defineProps(['tab']);
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
        <div class="col text-right">Wallet</div>
        <div v-if="tab == 'atlas'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().atlas_balance_wallet.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().polis_balance_wallet.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="POLIS"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-right">Squads</div>
        <div v-if="tab == 'atlas'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().atlas_balance_squads.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().polis_balance_squads.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="POLIS"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-right">Locker</div>
        <div v-if="tab == 'atlas'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().atlas_balance_locker.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="
                useStarAtlasLockerStore().polis_balance_locker.toString()
              "
              :decimals="decimals"
              :padStart="padStart"
              currency-name="POLIS"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
