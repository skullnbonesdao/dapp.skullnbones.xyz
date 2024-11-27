<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePlayerProfileStore } from 'src/solana/staratlas/player_profile/PlayerProfileStore';
import { useWorkspaceAdapter } from 'src/solana/connector';

onMounted(async () => {
  await usePlayerProfileStore().updateStore();
});

watch(
  () => usePlayerProfileStore().profile,
  async () => {
    const pg_playerProfile = useWorkspaceAdapter()?.pg_playerProfile.value;
    console.log(
      await pg_playerProfile?.account.profile.fetch(
        usePlayerProfileStore().profile!.pubkey,
      ),
    );
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
        <div>
          {{ usePlayerProfileStore().profile?.pubkey?.toString() }}
        </div>

        <div></div>

        <q-btn label="Create Profile"></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
