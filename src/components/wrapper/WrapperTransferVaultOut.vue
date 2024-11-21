<script setup lang="ts">
import { ref } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useQuasar } from 'quasar';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { getATA } from 'stores/globalWrapper_old';

const $q = useQuasar();
const amountToTransfer = ref(1);
const recipient = ref('C6LnFVyc5Qj2LAPdkX5CyyEEga9ePPB6ZRuzGhirZnqX');

const enableTransfer = ref(false);

async function transfer() {
  try {
    if (useWorkspaceAdapter()) {
      const tx = new Transaction();
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      tx.add(
        await pg_wrapper.methods
          .transferVault(
            calcAmountToTransfer(
              amountToTransfer.value,
              useTokenListStore().getTokenByMintPublicKey(
                useWrapperStore().wrapperSelected.account.mintUnwrapped,
              ).decimals,
            ) as any,
          )
          .accountsPartial({
            signer: getSigner(),
            wrapper: useWrapperStore().wrapperSelected.publicKey,
            mintUnwrapped:
              useWrapperStore().wrapperSelected.account.mintUnwrapped,
            ataUnwrappedSigner: getATA(
              new PublicKey(recipient.value).toString(),
              useWrapperStore().wrapperSelected.account.mintUnwrapped.toString(),
            ),
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
