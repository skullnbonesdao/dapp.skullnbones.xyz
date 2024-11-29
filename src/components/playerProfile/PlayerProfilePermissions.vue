<script setup lang="ts">
import { usePlayerProfileStore } from 'src/solana/staratlas/player_profile/PlayerProfileStore';
</script>

<template>
  <q-card
    flat
    bordered
    v-for="k in usePlayerProfileStore().profileKeys"
    :key="k"
  >
    <q-card-section class="row">
      <div class="col">Permission for:</div>
      <div>
        {{ k.profileKeys.key }}
      </div>
    </q-card-section>
    <q-card-section
      class="col"
      v-for="permission in Object.keys(k.sagePermissions)"
      :key="permission"
    >
      <div class="row justify-end">
        <q-toggle
          dense
          left-label
          :label="permission"
          v-model="
            usePlayerProfileStore().profileKeys[0].sagePermissions[permission]
          "
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
