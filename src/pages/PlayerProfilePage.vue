<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePlayerProfileStore } from 'src/solana/staratlas/player_profile/PlayerProfileStore';
import { getSigner } from '../solana/squads/SignerFinder';
import PlayerProfilePermissions from 'components/playerProfile/PlayerProfilePermissions.vue';
import PlayerProfileCreate from 'components/playerProfile/PlayerProfileCreate.vue';

onMounted(async () => {
  await usePlayerProfileStore().updateStore();
});

watch(
  () => getSigner()?.toString(),
  async () => {
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
