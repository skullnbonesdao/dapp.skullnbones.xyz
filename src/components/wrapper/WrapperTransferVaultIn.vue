<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { createTransferCheckedInstruction } from '@solana/spl-token';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useQuasar } from 'quasar';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { findATA, findVaultAddress } from 'src/solana/wrapper/WrapperInterface';
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';

const $q = useQuasar();
const amountToTransfer = ref(1);
const origin = ref(getSigner().toString());

const enableTransfer = ref(true);

watch(
  () => useSquadsStore().useSquads,
  () => {
    origin.value = getSigner().toString();
  },
);

async function transfer() {
  try {
    if (useWorkspaceAdapter()) {
      const tx = new Transaction();

      const amount = calcAmountToTransfer(
        amountToTransfer.value,
        useTokenListStore().getTokenByMintPublicKey(
          useWrapperStore().wrapperSelected?.account.mintUnwrapped.toString(),
        )?.decimals ?? 0,
      );

      tx.add(
        createTransferCheckedInstruction(
          findATA(
            origin.value,
            useWrapperStore().wrapperSelected!.account.mintUnwrapped.toString(),
          ),
          useWrapperStore().wrapperSelected!.account.mintUnwrapped,
          findVaultAddress(
            useWrapperStore().wrapperSelected?.publicKey,
            useWrapperStore().wrapperSelected?.account.mintUnwrapped,
          ),
          new PublicKey(origin.value),
          amount.toNumber(),
          useTokenListStore().getTokenByMintPublicKey(
            useWrapperStore().wrapperSelected?.account.mintUnwrapped.toString(),
          )!.decimals,
        ),
      );

      await handleTransaction(tx, `[Wrapper] transfer IN from ${origin.value}`);
      await useWrapperStore().updateStore();
    }
  } catch (err) {
    console.error(err);
    $q.notify({
      message: err.message,
      type: 'negative',
    });
  }
}
</script>

<template>
  <q-card flat>
    <div class="col">
      <div class="row">
        <q-input
          class="col"
          :disable="!enableTransfer"
          square
          filled
          v-model="origin"
          type="text"
          label="Origin address"
        />
        <q-separator vertical />
        <q-input
          :disable="!enableTransfer"
          square
          filled
          v-model="amountToTransfer"
          type="number"
          label="Amount to transfer"
        />
        <q-btn
          :disable="!amountToTransfer || !origin || !enableTransfer"
          color="primary"
          label="Transfer in"
          icon="login"
          square
          @click="transfer()"
        />
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
