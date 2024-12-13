<script setup lang="ts">
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { findProxy } from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { computed } from 'vue';
import { formatTimespan } from '../../../functions/formatTimespan';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import { ATLAS_DECIMALS } from 'src/solana/staratlas/locker/atlas/consts';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';

const remaing_time = computed(() => {
  if (usePolisLockerStore().escrow)
    return (
      parseInt(usePolisLockerStore().escrow?.escrowEndsAt?.toString() ?? '0') -
      Math.floor(new Date().getTime() / 1000)
    );
  else return 0;
});
</script>

<template>
  <q-expansion-item expand-separator default-opened>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge
          :account-exists="
            usePolisLockerStore().escrow
              ? Object.keys(usePolisLockerStore().escrow).length
                ? true
                : false
              : false
          "
        />
      </q-item-section>

      <q-item-section> Escrow </q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ findProxy()[0] }}</div>
          <SolscanLink :address="findEscrow()[0]" />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section v-if="usePolisLockerStore().escrow">
        <div
          class="row"
          v-for="info in Object.keys(usePolisLockerStore().escrow)"
          :key="info"
        >
          <div class="col text-uppercase">
            {{ info }}
          </div>
          <div v-if="info.includes('amount')" class="row">
            <AmountCurrencyDisplay
              currency-name="ATLAS"
              :decimals="8"
              :number="
                usePolisLockerStore().escrow[info] *
                Math.pow(10, -ATLAS_DECIMALS)
              "
            />
          </div>
          <div
            v-else-if="
              info.includes('escrowStartedAt') || info.includes('escrowEndsAt')
            "
            class="row"
          >
            {{
              new Date(usePolisLockerStore().escrow[info] * 1000).toUTCString()
            }}
          </div>
          <div v-else>
            {{ usePolisLockerStore().escrow[info] }}
          </div>
        </div>
        <div class="row">
          <div class="col row q-gutter-x-sm">
            <div class="text-uppercase">Expires in</div>
          </div>
          <div>
            {{ formatTimespan(remaing_time) }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
