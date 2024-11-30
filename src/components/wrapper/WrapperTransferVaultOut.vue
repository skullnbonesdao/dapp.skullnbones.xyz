<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useQuasar } from 'quasar';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { findATA } from 'src/solana/wrapper/WrapperInterface';
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import { useRPCStore } from 'stores/rpcStore';

const $q = useQuasar();
const amountToTransfer = ref(1);
const recipient = ref(getSigner().toString());

const enableTransfer = ref(false);

watch(
  () => useSquadsStore().useSquads,
  () => {
    recipient.value = getSigner().toString();
  },
);

async function transfer() {
  try {
    if (useWorkspaceAdapter()) {
      const tx = new Transaction();
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      const ataUnwrappedSigner = findATA(
        new PublicKey(recipient.value.toString()).toString(),
        useWrapperStore().wrapperSelected!.account.mintUnwrapped.toString(),
      );

      const ataInfo =
        await useRPCStore().connection.getAccountInfo(ataUnwrappedSigner);

      if (!ataInfo) {
        tx.add(
          createAssociatedTokenAccountInstruction(
            getSigner(),
            ataUnwrappedSigner,
            new PublicKey(recipient.value.toString()),
            useWrapperStore().wrapperSelected!.account.mintUnwrapped,
            TOKEN_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID,
          ),
        );
      }

      tx.add(
        await pg_wrapper.methods
          .transferVault(
            calcAmountToTransfer(
              amountToTransfer.value,
              useWrapperStore().wrapperSelected!.account.wrappedDecimals,
            ) as any,
          )
          .accountsPartial({
            signer: getSigner(),
            wrapper: useWrapperStore().wrapperSelected?.publicKey,
            mintUnwrapped:
              useWrapperStore().wrapperSelected?.account.mintUnwrapped,
            ataUnwrappedSigner: ataUnwrappedSigner,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .instruction(),
      );

      await handleTransaction(tx, `[Wrapper] transfer to ${recipient.value}`);
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
    <div class="text-subtitle2 row items-center">
      <q-checkbox v-model="enableTransfer" />
      <div class="text-accent">
        I want to transfer tokens out of the vault to a new address
      </div>
    </div>
    <div class="col">
      <div class="row">
        <q-input
          class="col"
          :disable="!enableTransfer"
          square
          filled
          v-model="recipient"
          type="text"
          label="recipient"
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
          :disable="!amountToTransfer || !recipient || !enableTransfer"
          color="primary"
          label="Send"
          square
          @click="transfer()"
        />
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
