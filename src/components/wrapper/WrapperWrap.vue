<script setup lang="ts">
import { ref } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import * as anchor from '@coral-xyz/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { calcAmountToTransfer } from 'stores/globalStore';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import { PublicKey, Transaction } from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { getATA } from 'stores/globalWrapper_old';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { getSigner } from 'src/solana/squads/SignerFinder';

const $q = useQuasar();
const amountToWrap = ref(1);

const props = defineProps(['wrapper']);

async function buildTX(label: string) {
  try {
    if (useWorkspaceAdapter()) {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
      const tx = new Transaction();

      const wrapper = props.wrapper;

      const amount_to_transfer = new anchor.BN(
        calcAmountToTransfer(
          amountToWrap.value,
          useAccountStore().accounts.find(
            (acc) =>
              acc.mint.toString() == wrapper?.account.mintUnwrapped.toString(),
          )?.decimals ?? 0,
        ),
      );

      let ataInfo = await useRPCStore().connection.getAccountInfo(
        getATA(
          useWallet().publicKey.value!.toString(),
          props.wrapper.account.mintWrapped.toString(),
        ),
      );

      if (!ataInfo) {
        tx.add(
          createAssociatedTokenAccountInstruction(
            getSigner()!,
            getATA(
              getSigner()!.toString(),
              props.wrapper.account.mintWrapped.toString(),
            ),
            getSigner()!,
            props.wrapper.account.mintWrapped,
            TOKEN_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID,
          ),
        );
      }

      tx.add(
        await pg_wrapper.methods
          .wrap(amount_to_transfer)
          .accountsPartial({
            signer: useWallet().publicKey.value,
            wrapper: wrapper.publicKey,
            mintUnwrapped: wrapper.account.mintUnwrapped,
            signerUnwrapped: new PublicKey(
              useAccountStore().accounts.find(
                (acc) =>
                  acc.mint.toString() ==
                  wrapper.account.mintUnwrapped.toString(),
              )?.pubkey ?? '',
            ),
            signerWrapped: getATA(
              useWallet().publicKey.value!.toString(),
              props.wrapper.account.mintWrapped.toString(),
            ),

            tokenProgram: TOKEN_PROGRAM_ID,
            whitelist: null,
            whitelistEntry: null,
          })
          .instruction(),
      );

      await handleTransaction(tx, 'Wrap tokens');
    }

    await useWrapperStore().updateStore();
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
  <div>
    <q-input
      :disable="!wrapper.account.allowWrap"
      filled
      v-model="amountToWrap"
    />
    <q-btn
      :disable="!wrapper.account.allowWrap"
      class="full-width"
      color="primary"
      label="Wrap"
      @click="buildTX('Wrapping')"
    ></q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
