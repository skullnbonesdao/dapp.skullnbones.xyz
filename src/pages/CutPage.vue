<script setup lang="ts">
import CutPayment from 'components/cut/CutPayment.vue';
import { format_address } from '../functions/format_address';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';

const RECIPIENT = 'GMtvP4jfaVXXAY1mAm1vTiXMWexqmbVmWKB55xFtWqTw';
const TOKEN = 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx';
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="content_cut" size="md" />
        <div class="col text-h6">Cut</div>
      </q-card-section>
      <q-separator />
    </q-card>
    <div class="row justify-center q-ma-md">
      <q-card class="" flat style="min-width: 500px">
        <q-card-section>
          <div class="text-subtitle1">Pay your cut: 3.3%</div>
          <div class="text-subtitle2 text-accent">
            Easily pay your cut to Skull&Bones for the current month
          </div>
          <div class="row">
            <div class="col">Sending to:</div>
            <div class="">{{ format_address(RECIPIENT) }}</div>
          </div>
        </q-card-section>
        <q-card-section class="q-gutter-y-sm">
          <WalletMultiButton dark v-if="!useWallet().publicKey.value" />
          <CutPayment
            v-else
            :token-address="TOKEN"
            :recipient-address="RECIPIENT"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
