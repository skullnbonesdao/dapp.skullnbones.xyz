<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useWallet } from 'solana-wallets-vue';
import SelectEscrowToken from 'components/escrow/SelectEscrowToken.vue';
import { useRPCStore } from 'stores/rpcStore';

const is_loading = ref(true);

const wallet_accounts = ref();
const deposit_account = ref();
const receive_account = ref();

const deposit_amount = ref();
const receive_amount = ref();

onMounted(async () => {
  const accounts =
    await useRPCStore().connection.getParsedTokenAccountsByOwner(
      useWallet().publicKey.value!,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );
  wallet_accounts.value = accounts.value;
  is_loading.value = false;
});
</script>

<template>
  <div class="q-gutter-y-md">
    <SelectEscrowToken
      title="Deposit"
      v-if="!is_loading"
      :wallet_accounts="wallet_accounts"
      @selected_account="(data) => (deposit_account = data)"
      @selected_amount="(data) => (deposit_amount = data)"
    />

    <SelectEscrowToken
      title="Recieve"
      v-if="!is_loading"
      :wallet_accounts="wallet_accounts"
      @selected_account="(data) => (receive_account = data)"
      @selected_amount="(data) => (receive_amount = data)"
    />
    <q-btn color="primary">Create Escrow</q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
