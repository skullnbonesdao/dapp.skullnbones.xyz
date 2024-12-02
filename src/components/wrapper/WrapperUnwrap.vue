<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useWallet } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { calcAmountToTransfer } from 'src/solana/calcAmountToTransfer';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import { PublicKey, Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { findATA, findVaultAddress } from 'src/solana/wrapper/WrapperInterface';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import * as WHITELST from 'src/solana/whitelist/WhitelistInterface';
import { useRPCStore } from 'stores/rpcStore';

const $q = useQuasar();
const amountToUnwrap = ref(0);
const vaultBalance = ref(0);

const props = defineProps(['wrapper']);

const isValid = computed(() => amountToUnwrap.value <= vaultBalance.value);

onMounted(async () => {
  const accountBalance = (
    await useRPCStore().connection.getTokenAccountBalance(
      findVaultAddress(
        props.wrapper.publicKey,
        props.wrapper.account.mintUnwrapped,
      ),
    )
  ).value;
  vaultBalance.value = accountBalance.uiAmount ?? 0;
});

async function buildTX(label: string) {
  try {
    const tx = new Transaction();
    const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

    const wrapper = props.wrapper;

    const amount_to_transfer = calcAmountToTransfer(
      amountToUnwrap.value,
      useAccountStore().getAccountByMintPublicKey(
        wrapper?.account.mintUnwrapped,
      )?.decimals,
    );

    let whitelist = props.wrapper.account.useWhitelist
      ? props.wrapper.account.whitelist
      : null;
    let whitelistEntry = props.wrapper.account.useWhitelist
      ? WHITELST.findWhitelistEntryAddress(whitelist)
      : null;

    tx.add(
      await pg_wrapper.methods
        .unwrap(amount_to_transfer as any)
        .accountsPartial({
          signer: getSigner(),
          wrapper: wrapper.publicKey,
          mintUnwrapped: wrapper.account.mintUnwrapped,
          signerUnwrapped: new PublicKey(
            useAccountStore().accounts.find(
              (acc) =>
                acc.mint.toString() == wrapper.account.mintUnwrapped.toString(),
            )?.pubkey ?? '',
          ),
          signerWrapped: findATA(
            useWallet().publicKey.value!.toString(),
            props.wrapper.account.mintWrapped.toString(),
          ),

          tokenProgram: TOKEN_PROGRAM_ID,
          whitelist: whitelist,
          whitelistEntry: whitelistEntry,
          whitelistProgram: WHITELST.ID,
        })
        .instruction(),
    );
    await handleTransaction(tx, '[Wrapper] unwrap tokens');
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
  return !props.wrapper.account.allowWrap;
});
</script>

<template>
  <div class="col q-gutter-y-md">
    <q-input
      class="col"
      square
      :disable="disabled"
      filled
      type="number"
      v-model="amountToUnwrap"
      :hint="`Max ${vaultBalance} allowed to unwrap`"
      bottom-slots
      :error-message="`Max ${vaultBalance} allowed to unwrap`"
      :error="!isValid"
    />
    <q-btn
      class="full-width"
      :disable="disabled"
      color="primary"
      label="Unwrap"
      icon-right="send"
      @click="buildTX('Unwrapping')"
    ></q-btn>
  </div>
</template>

<style scoped lang="sass"></style>
