<script setup lang="ts">
import { computed, ref } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useQuasar } from 'quasar';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { Transaction } from '@solana/web3.js';
import { useRPCStore } from 'stores/rpcStore';
import { handleTransaction } from 'src/solana/handleTransaction';

import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { findATA } from 'src/solana/wrapper/WrapperInterface';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { useAccountStore } from 'src/solana/accounts/AccountStore';

import * as WHITELST from 'src/solana/whitelist/WhitelistInterface';

const $q = useQuasar();
const amountToWrap = ref(1);

const props = defineProps(['wrapper']);

async function buildTX() {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
    const wrapper = props.wrapper;
    const amount_to_transfer = calcAmountToTransfer(
      amountToWrap.value,
      useTokenListStore().getTokenByMintPublicKey(
        wrapper?.account.mintUnwrapped,
      )?.decimals ??
        useAccountStore().getAccountByMintPublicKey(
          wrapper?.account.mintUnwrapped,
        )?.decimals ??
        0,
    );

    let ataInfo = await useRPCStore().connection.getAccountInfo(
      findATA(
        getSigner().toString(),
        props.wrapper.account.mintWrapped.toString(),
      ),
    );

    if (!ataInfo) {
      tx.add(
        createAssociatedTokenAccountInstruction(
          getSigner()!,
          findATA(
            getSigner().toString(),
            props.wrapper.account.mintWrapped.toString(),
          ),
          getSigner()!,
          props.wrapper.account.mintWrapped,
          TOKEN_PROGRAM_ID,
          ASSOCIATED_TOKEN_PROGRAM_ID,
        ),
      );
    }

    let whitelist = props.wrapper.account.useWhitelist
      ? props.wrapper.account.whitelist
      : null;
    let whitelistEntry = props.wrapper.account.useWhitelist
      ? WHITELST.findWhitelistEntryAddress(whitelist)
      : null;

    tx.add(
      await pg_wrapper.methods
        .wrap(amount_to_transfer as any)
        .accountsPartial({
          signer: getSigner(),
          wrapper: wrapper.publicKey,
          mintUnwrapped: wrapper.account.mintUnwrapped,
          signerUnwrapped: findATA(
            getSigner().toString(),
            wrapper.account.mintUnwrapped.toString(),
          ),
          signerWrapped: findATA(
            getSigner().toString(),
            props.wrapper.account.mintWrapped.toString(),
          ),

          tokenProgram: TOKEN_PROGRAM_ID,
          whitelist: whitelist,
          whitelistEntry: whitelistEntry,
          whitelistProgram: WHITELST.ID,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Wrapper] wrap tokens');
    await useWrapperStore().updateStore();
    await useAccountStore().updateStore();
  } catch (err) {
    console.error(err);
    $q.notify({
      message: err.message,
      type: 'negative',
    });
  }
}

const disabled = computed(() => {
  return (
    !props.wrapper.account.allowWrap ||
    props.wrapper.account.limitAmountUnwrapped.toNumber() == 0
  );
});
</script>

<template>
  <div>
    <q-input :disable="disabled" filled type="number" v-model="amountToWrap" />
    <q-btn
      :disable="disabled"
      class="full-width"
      color="primary"
      label="Wrap"
      @click="buildTX()"
    ></q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
