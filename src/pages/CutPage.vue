<script setup lang="ts">
import CutPayment from 'components/cut/CutPayment.vue';
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="content_cut" size="md" />
        <div class="col text-h6">Cut</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <div class="text-subtitle1">Pay your cut: 3.3%</div>
        <div class="text-subtitle2 text-accent">
          Easily pay your cut to Skull&Bones for the current month
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-y-sm">
        <CutPayment />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
