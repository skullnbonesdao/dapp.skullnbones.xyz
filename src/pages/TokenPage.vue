<script lang="ts" setup>
import TokenCreate from 'components/token/TokenCreate.vue';
import TokenMintAndBurn from 'components/token/TokenMintAndBurn.vue';
import { getSigner } from '../solana/squads/SignerFinder';
import { format_address } from '../functions/format_address';
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="generating_tokens" size="md" />
        <div class="col text-h6">Token Factory</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-subtitle1">
          This interface is used to mint and burn tokens
        </div>
      </q-card-section>

      <q-card-section>
        <TokenCreate />
      </q-card-section>

      <q-card-section>
        <TokenMintAndBurn />
      </q-card-section>

      <q-separator />
    </q-card>
  </q-page>
</template>

<style lang="sass" scoped></style>
