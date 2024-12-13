<script setup lang="ts">
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import {
  findProxy,
  findProxyEscrow,
} from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { useAtlasLockerStore } from 'src/solana/staratlas/locker/atlas/AtlasLockerStore';
import { ATLAS_DECIMALS } from 'src/solana/staratlas/locker/atlas/consts';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';
</script>

<template>
  <q-expansion-item expand-separator>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge
          :account-exists="
            usePolisLockerStore().proxyEscrow
              ? Object.keys(usePolisLockerStore().proxyEscrow).length
                ? true
                : false
              : false
          "
        />
      </q-item-section>

      <q-item-section> ProxyEscrow </q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ findProxyEscrow()[0] }}</div>
          <SolscanLink :address="findProxyEscrow()[0]" />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section v-if="usePolisLockerStore().proxyEscrow">
        <div
          class="row"
          v-for="info in Object.keys(usePolisLockerStore().proxyEscrow)"
          :key="info"
        >
          <div class="col text-uppercase">
            {{ info }}
          </div>
          <div
            v-if="info.includes('amountClaimed') || info.includes('amount')"
            class="row"
          >
            <AmountCurrencyDisplay
              currency-name="ATLAS"
              :decimals="8"
              :number="
                usePolisLockerStore().proxyEscrow[info] *
                Math.pow(10, -ATLAS_DECIMALS)
              "
            />
          </div>
          <div
            v-else-if="
              info.includes('escrowStartedAt') ||
              info.includes('escrowEndsAt') ||
              info.includes('rewardsLastClaimedAt')
            "
            class="row"
          >
            <div v-if="usePolisLockerStore().proxyEscrow[info] == 0">-</div>
            <div v-else>
              {{
                new Date(
                  usePolisLockerStore().proxyEscrow[info] * 1000,
                ).toUTCString()
              }}
            </div>
          </div>
          <div v-else>
            {{ usePolisLockerStore().proxyEscrow[info] }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
