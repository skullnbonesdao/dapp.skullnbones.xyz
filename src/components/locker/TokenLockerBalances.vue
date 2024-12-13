<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';

import FormatNumber from 'components/text/FormatNumber.vue';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';

const props = defineProps(['tab']);

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
              :number="useAtlasLockerStore().balanceWallet.toString()"
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="usePolisLockerStore().balanceWallet.toString()"
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
              :number="useAtlasLockerStore().balanceSquads.toString()"
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="usePolisLockerStore().balanceSquads.toString()"
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
              :number="useAtlasLockerStore().balanceLocker.toString()"
              :decimals="decimals"
              :padStart="padStart"
              currency-name="ATLAS"
            />
          </div>
        </div>
        <div v-if="tab == 'polis'" class="col-1">
          <div class="row q-gutter-x-xs no-wrap justify-end">
            <AmountCurrencyDisplay
              :number="usePolisLockerStore().balanceLocker.toString()"
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
