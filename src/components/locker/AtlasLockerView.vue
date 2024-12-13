<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  LOCKER_TOKEN_DECIMALS,
  useStarAtlasLockerStore,
} from 'stores/globalStarAtlasLockerStore';
import FormatNumber from 'components/text/FormatNumber.vue';
import { getRelativeTime } from '../../functions/getRelativeTime';

const amount_to_stake = ref<number>(0);

onMounted(async () => {
  await useStarAtlasLockerStore().setAccounts();
});
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div class="row">
        <div class="col-1">
          <q-img src="/currencies/ATLAS.webp" />
        </div>

        <div class="col">
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Squads Vault Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useStarAtlasLockerStore().vaultPDA }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Squads Registered Stake</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useStarAtlasLockerStore().registeredStakeAtlas }}
              </div>
            </div>
          </div>
          <div class="row q-pr-md items-center">
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>Squads Staking Account</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div>
                {{ useStarAtlasLockerStore().stakingAccountAtlas }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-separator class="q-my-sm" />
    <q-card-section>
      <div class="row items-center">
        <div class="col-1 text-h5">Locker Info</div>

        <div
          class="col"
          v-if="useStarAtlasLockerStore().stakingAccountAtlasInfo"
        >
          <div
            class="row q-pr-md items-center"
            v-for="(key, idx) in Object.keys(
              useStarAtlasLockerStore().stakingAccountAtlasInfo,
            )"
            :key="idx"
          >
            <div class="col text-right text-subtitle2 text-weight-light">
              <div>{{ key.toUpperCase() }}</div>
            </div>
            <div class="col text-right text-subtitle1">
              <div
                class="row items-center q-gutter-x-sm"
                v-if="
                  [
                    'totalStake',
                    'activeStake',
                    'paidRewards',
                    'pendingRewards',
                  ].includes(key)
                "
              >
                <div class="col"></div>
                <q-avatar size="xs">
                  <img src="currencies/ATLAS.webp" />
                </q-avatar>
                <FormatNumber
                  class="text-right"
                  :number="
                    parseInt(
                      useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                    ) * Math.pow(10, -LOCKER_TOKEN_DECIMALS)
                  "
                  decimals="6"
                  pad-start="15"
                />
              </div>
              <div
                v-else-if="
                  [
                    'stakedAtTs',
                    'lastPendingRewardCalcTs',
                    'lastHarvestTs',
                    'unstakedTs',
                  ].includes(key)
                "
              >
                <div
                  v-if="
                    parseInt(
                      useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                    ) == 0
                  "
                >
                  -
                </div>
                <div v-else>
                  {{
                    getRelativeTime(
                      parseInt(
                        useStarAtlasLockerStore().stakingAccountAtlasInfo[key],
                      ) * 1000,
                    )
                  }}
                </div>
              </div>
              <div v-else>
                {{ useStarAtlasLockerStore().stakingAccountAtlasInfo[key] }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-subtitle2 text-center">No Locker found!</div>
      </div>
    </q-card-section>
    <q-separator class="q-my-sm" />
    <q-card-section>
      <div class="row items-center q-mx-md q-mb-md">
        <div class="col">
          <div class="text-h4">Instruction</div>
        </div>
        <div class="col-4">
          <div class="text-h4 text-center">Action</div>
        </div>
      </div>

      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h6">Create Staking Account</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will create a new locker instance for you
          </div>
        </div>
        <div class="col-4">
          <q-btn
            class="full-width"
            square
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_CreateStatingAccount()"
          ></q-btn>
        </div>
      </div>
      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h6">Stake Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will stake additional tokens
          </div>
        </div>
        <div class="col-4">
          <div class="row q-gutter-x-xs">
            <q-input
              dense
              square
              class="col"
              standout
              type="number"
              v-model="amount_to_stake"
              label="Amount to stake"
            />
            <q-btn
              square
              class="col-3"
              label="Sign"
              color="primary"
              @click="
                useStarAtlasLockerStore().build_StakeTokens(amount_to_stake)
              "
            ></q-btn>
          </div>
        </div>
      </div>
      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="col text-h6">Harvest</div>

          <div class="text-subtitle2 text-weight-light">
            This instruction will claim your rewards
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_harvestRewards()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h6">Unstake Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will initiate unstake of all tokens
          </div>
        </div>
        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_unstakeTokens()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h6">Cancel Unstake</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will cancel unstake of all tokens
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_cancelUnstake()"
          ></q-btn>
        </div>
      </div>

      <div class="row items-center q-mx-md">
        <div class="col">
          <div class="text-h6">Withdraw Tokens</div>
          <div class="text-subtitle2 text-weight-light">
            This instruction will withdraw of all tokens after unstake
          </div>
        </div>

        <div class="col-4">
          <q-btn
            class="full-width"
            label="Sign"
            color="primary"
            @click="useStarAtlasLockerStore().build_withdrawTokens()"
          ></q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
