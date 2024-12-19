<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePlayerProfileStore } from 'src/solana/staratlas/profiles/player/PlayerProfileStore';
import { getSigner } from '../solana/squads/SignerFinder';
import PlayerProfilePermissions from 'components/playerProfile/PlayerProfilePermissions.vue';
import PlayerProfileCreate from 'components/playerProfile/PlayerProfileCreate.vue';
import { useSageStore } from 'src/solana/staratlas/sage/SageStore';

onMounted(async () => {
  await useSageStore().updateStore();
  await usePlayerProfileStore().updateStore();
});

watch(
  () => getSigner(),
  async () => {
    await useSageStore().updateStore();
    await usePlayerProfileStore().updateStore();
  },
);
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="diversity_3" size="md" />
        <div class="col text-h6">Player Profile Integration</div>
      </q-card-section>
      <q-separator />

      {{ useSageStore().game }}
      <q-card-section>
        <div class="text-subtitle1">Playerprofile</div>
        <div class="text-subtitle2 text-accent">
          Get access to your player profile data
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-y-sm">
        <div class="row items-center">
          <div class="col text-subtitle1">User</div>
          {{ getSigner().toString() ?? 'not-found' }}
        </div>
        <div class="row items-center">
          <div class="col text-subtitle1">PlayerProfile</div>
          {{
            usePlayerProfileStore().profile?.pubkey?.toString() ?? 'not-found'
          }}
        </div>

        <PlayerProfilePermissions />

        <PlayerProfileCreate />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
