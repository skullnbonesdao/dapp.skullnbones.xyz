<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { ref, watch } from 'vue';
import SquadsBadge from 'components/squads/SquadsBadge.vue';
import { format_address } from '../functions/format_address';

const newMultisigLabel = ref('');
const newMultisigPDA = ref();

watch(
  () => useSquadsStore().storeSelected,
  () => {
    useSquadsStore().multisigPDA = useSquadsStore().storeSelected.value;
  },
);
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="diversity_3" size="md" />
        <div class="col text-h6">Squads.so Integration</div>
        <q-btn
          target="_blank"
          :href="useSquadsStore().getLink"
          color="primary"
          icon="arrow_forward"
          label="To Squads.so"
        />
      </q-card-section>
      <q-separator />

      <q-card-section>
        <div class="text-subtitle1">
          Please enter the required information so send instructions to your
          Squads Account
        </div>
        <div class="text-subtitle2 text-accent">
          You will still need to approve the transaction in you squads account!
        </div>
      </q-card-section>

      <q-card-section
        class="q-gutter-y-sm"
        v-if="useSquadsStore().store.length"
      >
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Select Squad</div>
            <div class="text-subtitle2">
              Please choose one of you stored squad accounts
            </div></q-card-section
          >
          <q-separator />
          <q-card-section class="q-gutter-y-sm">
            <div class="row q-gutter-x-sm items-center">
              <div class="col">
                <q-select
                  dense
                  filled
                  :options="useSquadsStore().store"
                  v-model="useSquadsStore().storeSelected"
                />
              </div>
              <div class="col row items-center text-weight-light">
                <SquadsBadge />
                <div class="q-mx-md text-weight-light">
                  {{ format_address(useSquadsStore().multisigPDA) }}
                </div>
              </div>
            </div>
            <div class="row q-gutter-x-sm items-center">
              <div class="col">
                <q-input
                  disable
                  dense
                  standout
                  v-model="useSquadsStore().getVaultPDA"
                  label="Squads Vault"
                />
              </div>
              <div class="col text-weight-light">
                Your Squads Account (computed)
              </div>
            </div>
            <div class="row">
              <div class="col"></div>
              <q-btn
                @click="useSquadsStore().removeFromStore()"
                label="Remove"
                color="primary"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section class="q-gutter-y-sm">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Add Squad</div>
            <div class="text-subtitle2">
              Add a new squad to the local store...
            </div></q-card-section
          >
          <q-separator />
          <q-card-section class="q-gutter-y-sm">
            <div class="row q-gutter-x-sm items-center">
              <div class="col">
                <q-input
                  type="text"
                  dense
                  standout
                  v-model="newMultisigLabel"
                  label="Label"
                />
              </div>
              <div class="col text-weight-light">
                Label the squad for easy filtering
              </div>
            </div>
            <div class="row q-gutter-x-sm items-center">
              <div class="col">
                <q-input
                  type="text"
                  dense
                  standout
                  v-model="newMultisigPDA"
                  label="Multisig Account"
                />
              </div>
              <div class="col text-weight-light">
                Squads.so -> Settings -> Multisig Account
              </div>
            </div>

            <div class="row">
              <div class="col"></div>
              <q-btn
                @click="
                  useSquadsStore().addToStore(newMultisigLabel, newMultisigPDA)
                "
                label="Add"
                color="primary"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
