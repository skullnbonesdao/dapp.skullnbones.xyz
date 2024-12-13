<script setup lang="ts">
import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import {
  findProxy,
  findProxyEscrow,
} from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { usePolisLockerStore } from 'src/solana/staratlas/locker/polis/PolisLockerStore';
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
          <div>
            {{ usePolisLockerStore().proxyEscrow[info] }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
