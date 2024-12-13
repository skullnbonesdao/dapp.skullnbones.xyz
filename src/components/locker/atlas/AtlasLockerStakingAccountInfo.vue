<script setup lang="ts">
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { findProxy } from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { formatTimespan } from 'src/functions/formatTimespan';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { useAtlasLockerStore } from '../../../solana/staratlas/locker/atlas/AtlasLockerStore';
import { findRegisteredStakeAtlas } from '../../../solana/staratlas/locker/atlas/AtlasLockerInterface';
import AmountCurrencyDisplay from 'components/text/AmountCurrencyDisplay.vue';
import { ATLAS_DECIMALS } from 'src/solana/staratlas/locker/atlas/consts';
</script>

<template>
  <q-expansion-item expand-separator>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge
          :account-exists="
            useAtlasLockerStore().stakingAccountAtlasInfo ? true : false
          "
      /></q-item-section>

      <q-item-section>Staking Account</q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ useAtlasLockerStore().stakingAccountAtlasAddress }}</div>
          <SolscanLink
            :address="useAtlasLockerStore().stakingAccountAtlasAddress"
          />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section v-if="useAtlasLockerStore().stakingAccountAtlasInfo">
        <div
          class="row"
          v-for="info in Object.keys(
            useAtlasLockerStore().stakingAccountAtlasInfo,
          )"
          :key="info"
        >
          <div class="col text-uppercase">
            {{ info }}
          </div>
          <div
            v-if="
              info.includes('totalStake') ||
              info.includes('activeStake') ||
              info.includes('pendingRewards') ||
              info.includes('paidRewards') ||
              info.includes('pendingRewards')
            "
            class="row"
          >
            <AmountCurrencyDisplay
              currency-name="ATLAS"
              :number="
                useAtlasLockerStore().stakingAccountAtlasInfo[info] *
                Math.pow(10, -ATLAS_DECIMALS)
              "
            />
          </div>

          <div
            v-else-if="
              info.includes('stakedAtTs') ||
              info.includes('lastPendingRewardCalcTs') ||
              info.includes('lastHarvestTs') ||
              info.includes('unstakedTs')
            "
            class="row"
          >
            <div
              v-if="useAtlasLockerStore().stakingAccountAtlasInfo[info] == 0"
            >
              -
            </div>
            <div v-else>
              {{
                new Date(
                  useAtlasLockerStore().stakingAccountAtlasInfo[info] * 1000,
                ).toUTCString()
              }}
            </div>
          </div>

          <div v-else>
            {{ useAtlasLockerStore().stakingAccountAtlasInfo[info] }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
