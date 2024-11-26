<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';
import { useAccountStore } from 'src/solana/accounts/AccountStore';
import { PublicKey } from '@solana/web3.js';

const props = defineProps(['label', 'textboxLabel']);
const emits = defineEmits(['token_account_selected']);
const selected = ref();
const filterOptions = ref(['list', 'address']);
const filterOption = ref('list');

const tokenOptions = ref<
  [
    {
      name: string;
      symbol: string;
      mint: string;
    },
  ]
>(mapTokens2TokenOptions());

watch(
  () => selected.value,
  () => {
    console.log(selected.value);
    emits('token_account_selected', selected.value);
  },
);

watch(
  () => filterOption.value,
  () => (tokenOptions.value = mapTokens2TokenOptions()),
);

function mapTokens2TokenOptions() {
  return filterOption.value == 'list'
    ? useTokenListStore().tokenList.map((t) => {
        return {
          name: t.name,
          symbol: t.symbol,
          mint: t.address,
        };
      })
    : useAccountStore().getAccountsBalanceNotZero?.map((t) => {
        return {
          name: t.info?.name,
          symbol: t.info?.symbol,
          mint: t.mint,
        };
      });
}

function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    tokenOptions.value = mapTokens2TokenOptions().filter(
      (v) => JSON.stringify(v).toLowerCase().indexOf(needle) > -1,
    );
  });
}
</script>

<template>
  <div class="row items-center">
    <div class="col text-h6">{{ label }}</div>
    <div class="row items-center">
      <div class="col text-right q-mr-md text-subtitle2">Filter:</div>
      <q-tabs dense v-model="filterOption" class="text-teal">
        <q-tab v-for="fo in filterOptions" :name="fo" :label="fo" :key="fo" />
      </q-tabs>
    </div>
  </div>
  <div class="row q-gutter-x-md items-center">
    <q-select
      filled
      square
      class="col"
      use-input
      hide-selected
      fill-input
      @filter="filterFn"
      :options="tokenOptions"
      :option-label="
        (option) =>
          option.name ? `[${option.symbol}] ${option.name}` : option.mint
      "
      v-model="selected"
      :label="textboxLabel"
    >
      <template v-slot:option="scope">
        <q-item v-if="!scope.opt.group" v-bind="scope.itemProps">
          <q-item-section avatar>
            <q-avatar>
              <q-img
                :src="
                  useTokenListStore().getTokenByMintPublicKey(
                    new PublicKey(scope.opt.mint),
                  )?.logoURI
                "
              ></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label
              >[{{ scope.opt.symbol }}] {{ scope.opt.name }}</q-item-label
            >
            <q-item-label caption>{{ scope.opt.mint }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<style scoped lang="sass"></style>
