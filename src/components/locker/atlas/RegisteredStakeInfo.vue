<script setup lang="ts">
import SolscanLink from 'components/buttons/SolscanLink.vue';
import AccountBadge from 'components/locker/AccountBadge.vue';
import { useAtlasLockerStore } from '../../../solana/staratlas/locker/atlas/AtlasLockerStore';

const props = defineProps(['address', 'name']);
</script>

<template>
  <q-expansion-item expand-separator>
    <template v-slot:header>
      <q-item-section avatar>
        <AccountBadge :account-exists="address ? true : false"
      /></q-item-section>

      <q-item-section>Registered Stake {{ name }}</q-item-section>

      <q-item-section side>
        <div class="row items-center q-gutter-md">
          <div>{{ address }}</div>
          <SolscanLink :address="address" />
        </div>
      </q-item-section>
    </template>

    <q-card> </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass"></style>
