<script setup lang="ts">
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { findProxy } from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { usePolisLockerStore } from '../../../solana/staratlas/locker/polis/PolisLockerStore';
</script>

<template>
  <q-expansion-item expand-separator>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge
          :account-exists="
            Object.keys(usePolisLockerStore().proxy).length ? true : false
          "
        />
      </q-item-section>

      <q-item-section> Proxy </q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ findProxy()[0] }}</div>
          <SolscanLink :address="findProxy()[0]" />
        </div>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section v-if="usePolisLockerStore().proxy">
        <div
          class="row"
          v-for="info in Object.keys(usePolisLockerStore().proxy)"
          :key="info"
        >
          <div class="col text-uppercase">
            {{ info }}
          </div>
          <div>
            {{ usePolisLockerStore().proxy[info] }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
