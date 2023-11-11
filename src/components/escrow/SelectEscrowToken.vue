<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['wallet_accounts', 'title']);
const emits = defineEmits(['selected_account', 'selected_amount']);

const selected_account = ref();
const amount = ref();

async function onItemClick(account) {
  selected_account.value = account;
  emits('selected_account', selected_account.value);
}
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h5 q-pt-sm text-left">{{ title }}</div>
        <div
          v-if="selected_account"
          class="text-uppercase text-left q-mt-sm q-mb-xs"
        >
          Unknown-Token
        </div>
        <div
          v-if="selected_account"
          class="col text-caption text-left text-grey"
        >
          <div class="row">
            <div class="col">Mint:</div>
            <div class="col">
              {{ selected_account?.account.data.parsed.info.mint }}
            </div>
          </div>

          <div class="row">
            <div class="col">Account:</div>
            <div class="col">{{ selected_account?.pubkey }}</div>
          </div>

          <div class="row">
            <div class="col">AccountOwner:</div>
            <div class="col">
              {{ selected_account?.account.data.parsed.info.owner }}
            </div>
          </div>

          <div class="row">
            <div class="col">Amount:</div>
            <div class="col">
              {{
                selected_account?.account.data.parsed.info.tokenAmount.uiAmount
              }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-space />
      <q-card-section class="col-3 flex flex-center">
        <q-img
          v-if="selected_account"
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions class="q-gutter-x-md">
      <q-btn-dropdown
        color="primary"
        :label="
          selected_account
            ? selected_account?.account.data.parsed.info.mint
            : 'select an account'
        "
      >
        <q-list>
          <q-item
            :key="account"
            v-for="account in wallet_accounts"
            clickable
            v-close-popup
            @click="onItemClick(account)"
          >
            <q-item-section>
              <q-item-label
                >{{ account.account.data.parsed.info.mint }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-input
        label="Amount"
        v-model="amount"
        dense
        type="text"
        @change="emits('selected_amount', amount)"
      ></q-input>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
