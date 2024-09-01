<script setup lang="ts">
import { useStarAtlasLockerStore } from 'stores/globalStarAtlasLockerStore';
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6 text-weight-thin">
        This Tool is build for easy interaction between StarAtlasLockers using a
        Squads.so multi signature account!
      </div>
    </q-card-section>

    <q-card-section>
      <div class="text-subtitle1">
        Please enter the required information so send instructions to your
        Squads Account
      </div>
      <div class="text-subtitle2 text-weight-thin text-orange-5">
        You will still need to approve the transaction in you squads account!
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-y-sm">
      <div class="row q-gutter-x-sm items-center">
        <div class="col">
          <q-input
            dense
            standout
            v-model="useStarAtlasLockerStore().multisigPDA"
            label="MultisigPDA"
          />
        </div>
        <div class="col text-weight-light">
          Squads.so -> Settings -> Multisig Account
        </div>
      </div>
      <div class="row q-gutter-x-sm items-center">
        <div class="col">
          <q-input
            disable
            dense
            standout
            v-model="useStarAtlasLockerStore().getVaultPDA"
            label="VaultPDA"
          />
        </div>
        <div class="col text-weight-light">Your Squads Account</div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row items-center">
        <div class="text-subtitle1">Squads Multisig Info</div>
        <q-space />
        <q-btn
          square
          color="primary"
          label="Update Squads info"
          @click="useStarAtlasLockerStore().setAccounts()"
        ></q-btn>
      </div>
      <div v-if="useStarAtlasLockerStore().multisigInfo?.members?.length">
        <div class="text-subtitle2">Members</div>
        <q-list dense bordered padding class="rounded-borders">
          <q-item v-ripple>
            <q-item-section>
              <div class="row">
                <div class="col">Member Address</div>
                <div>Permission</div>
              </div>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            v-for="member in useStarAtlasLockerStore().multisigInfo.members"
            :key="member.key"
          >
            <q-item-section>
              <div class="row">
                <div class="col">{{ member.key }}</div>
                <div>{{ member.permissions.mask }}</div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
