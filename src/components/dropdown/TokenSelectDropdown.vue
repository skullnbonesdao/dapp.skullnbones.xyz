<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { ref } from 'vue';

useGlobalStore();

const emits = defineEmits(['token_account_selected']);
const token_account_selected = ref();

async function onItemClick(account: any) {
  token_account_selected.value = account;
  emits('token_account_selected', token_account_selected.value);
}
</script>

<template>
  <q-btn-dropdown
    v-if="useGlobalStore().token_accounts"
    color="primary"
    :label="
      token_account_selected
        ? token_account_selected?.account.data.parsed.info.mint
        : 'select an account'
    "
  >
    <q-list>
      <q-item
        :key="account"
        v-for="account in useGlobalStore().token_accounts"
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
</template>

<style scoped lang="sass"></style>
