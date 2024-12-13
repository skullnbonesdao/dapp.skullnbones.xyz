<script setup lang="ts">
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { ref } from 'vue';

const newMultisigLabel = ref('');
const newMultisigPDA = ref();
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

      <q-card-section class="q-gutter-y-sm">
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
                  option-label="label"
                  option-value="address"
                  :options="useSquadsStore().store"
                  v-model="useSquadsStore().multisigPDA"
                />
              </div>
              <div class="col text-weight-light">
                <q-badge>
                  {{
                    useSquadsStore().store.find(
                      (s: any) => s.address === useSquadsStore().multisigPDA,
                    ).label
                  }}</q-badge
                >
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
                  useSquadsStore().addMultisigPDA(
                    newMultisigLabel,
                    newMultisigPDA,
                  )
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
