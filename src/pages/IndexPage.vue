<script setup lang="ts">
import IconFromSeed from 'components/icons/IconFromSeed.vue';
import { WalletMultiButton } from 'solana-wallets-vue';
import { useGlobalStore } from '../stores/globalStore';
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <transition appear enter-active-class="animated fadeInDown ">
      <div>
        <h1>devAPP</h1>
        <h2>Skull&Bones</h2>
        <!--      <TestCanvas />-->
        <div class="row">
          <q-space />
          <WalletMultiButton dark />
          <q-space />
        </div>
        <!--      <IconFromSeed seed="devApp" />-->
      </div>
    </transition>
  </q-page>
</template>
