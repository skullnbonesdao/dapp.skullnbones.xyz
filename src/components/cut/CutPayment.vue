<script setup lang="ts">
import { ref } from 'vue';
import { Notify } from 'quasar';
import { PublicKey, Transaction } from '@solana/web3.js';
import { createTransferCheckedInstruction } from '@solana/spl-token';

import { getSigner } from 'src/solana/squads/SignerFinder';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { calcAmountToTransfer } from 'stores/globalStore';
import { handleTransaction } from 'src/solana/handleTransaction';
import { findATA } from 'src/solana/wrapper/WrapperInterface';
import AccountBalance from 'components/AccountBalance.vue';

const amount = ref();
const props = defineProps(['tokenAddress', 'recipientAddress']);

async function transfer() {
  try {
    const tx = new Transaction();

    const owner = new PublicKey(props.recipientAddress);
    const token = useTokenListStore().tokenList.find(
      (t) => t.address == props.tokenAddress,
    )!;
    const source = findATA(getSigner().toString(), token.address);
    const destination = findATA(owner.toString(), token.address);

    tx.add(
      createTransferCheckedInstruction(
        source,
        new PublicKey(token.address),
        destination,
        getSigner(),
        calcAmountToTransfer(amount.value, token.decimals),
        token.decimals,
      ),
    );

    await handleTransaction(tx, '[Cut] Transfer');
  } catch (err) {
    Notify.create({
      color: 'danger',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div class="row">
    <q-input class="col" type="number" filled v-model="amount" />
    <q-btn
      :disable="!amount"
      color="primary"
      square
      label="Pay"
      @click="transfer()"
    />
  </div>
  <AccountBalance :mint="props.tokenAddress" />
</template>

<style scoped lang="sass"></style>
