<script setup lang="ts">
import { usePlayerProfileStore } from 'src/solana/staratlas/profiles/player/PlayerProfileStore';
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

    <q-list bordered separator>
      <q-item
        v-for="permission in Object.keys(k.sagePermissions)"
        :key="permission"
      >
        <q-item-section class="">
          <div class="row">
            <div class="col">
              {{ permission.toUpperCase() }}
            </div>
            <q-toggle
              dense
              v-model="
                usePlayerProfileStore().profileKeys[0].sagePermissions[
                  permission
                ]
              "
              checked-icon="check"
              color="primary"
              unchecked-icon="clear"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<style scoped lang="sass"></style>
