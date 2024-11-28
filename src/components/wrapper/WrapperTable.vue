<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref, watch } from 'vue';
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import WrapperWrap from 'components/wrapper/WrapperWrap.vue';
import WrapperUnwrap from 'components/wrapper/WrapperUnwrap.vue';
import WrapperVaultDonut from 'components/wrapper/WrapperVaultDonut.vue';
import { useAccountStore } from '../../solana/accounts/AccountStore';
import FormatNumber from 'components/text/FormatNumber.vue';
import { format_address } from '../../functions/format_address';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import WrapperImageAsync from 'components/wrapper/WrapperImageAsync.vue';
import WrapperSolscanLink from 'components/wrapper/WrapperSolscanLink.vue';
import { useTokenListStore } from '../../solana/tokens/TokenListStore';

const rows = [];

rows.sort(() => -1 + Math.floor(3 * Math.random()));

const $q = useQuasar();

function getItemsPerPage() {
  if ($q.screen.lt.sm) {
    return 3;
  }
  if ($q.screen.lt.md) {
    return 6;
  }
  return 9;
}

const filter = ref('');
const pagination = ref({
  page: 1,
  rowsPerPage: getItemsPerPage(),
});

watch(
  () => $q.screen.name,
  () => {
    pagination.value.rowsPerPage = getItemsPerPage();
  },
);

format_address('');

const rowsPerPageOptions = computed(() => {
  return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
});
</script>

<template>
  <div class="q-pa-md">
    <q-table
      v-if="useWrapperStore().groupSelected"
      grid
      hide-header
      hide-bottom
      :rows="
        useWrapperStore().getWrapperByGroup(useWrapperStore().groupSelected)
      "
      row-key="name"
      :filter="filter"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
          <q-card flat bordered>
            <q-card-section class="text-center">
              <WrapperImageAsync :wrapper="props.row" />
            </q-card-section>

            <q-card-section class="q-gutter-y-xs">
              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Group</div>
                <div class="text-subtitle2">
                  {{
                    useWrapperStore().groups.find(
                      (g) =>
                        g.publicKey.toString() ==
                        props.row.account.group.toString(),
                    ).account.name
                  }}
                </div>
              </div>
              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Pair</div>
                <div class="text-subtitle2 row q-gutter-x-xs">
                  <div>
                    {{
                      useTokenListStore().tokenList.find(
                        (t) =>
                          t.address ==
                          props.row.account.mintUnwrapped.toString(),
                      ).symbol
                    }}
                  </div>
                  <div>/</div>
                  <div>
                    W{{
                      useTokenListStore().tokenList.find(
                        (t) =>
                          t.address ==
                          props.row.account.mintUnwrapped.toString(),
                      ).symbol
                    }}
                  </div>
                </div>
              </div>
              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Wrappable</div>
                <div
                  :class="
                    props.row.account.useLimit == true &&
                    props.row?.account.limitAmountUnwrapped == 0
                      ? 'text-red'
                      : ''
                  "
                >
                  <FormatNumber
                    v-if="props.row?.account.useLimit"
                    :number="props.row?.account.limitAmountUnwrapped.toNumber()"
                    :decimals="4"
                    :pad-start="10"
                  />
                  <div v-else>Unlimited</div>
                </div>
              </div>

              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Address</div>
                <div class="text-subtitle2">
                  {{ format_address(props.row?.publicKey?.toString()) }}
                  <WrapperSolscanLink :account="props.row.publicKey" />
                </div>
              </div>

              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Unwrapped</div>
                <div class="text-subtitle2">
                  {{
                    format_address(props.row?.account.mintUnwrapped?.toString())
                  }}
                  <WrapperSolscanLink
                    :account="props.row.account.mintUnwrapped"
                  />
                </div>
              </div>

              <div class="row items-center">
                <div class="col text-subtitle1 text-weight-thin">Wrapped</div>
                <div class="text-subtitle2">
                  {{
                    format_address(props.row?.account.mintWrapped?.toString())
                  }}
                  <WrapperSolscanLink
                    :account="props.row.account.mintWrapped"
                  />
                </div>
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions class="row">
              <q-card class="col q-mx-sm" flat bordered>
                <q-card-section>
                  <div class="text-center text-subtitle2">Status</div>
                </q-card-section>
                <q-separator />
                <div></div>

                <q-card-section>
                  <WrapperVaultDonut
                    :mintWrapped="props.row.account.mintWrapped.toString()"
                    :mintUnwrapped="props.row.account.mintUnwrapped.toString()"
                    :wrapper="props.row"
                  />
                </q-card-section>
              </q-card>
            </q-card-actions>

            <q-card-section
              v-if="!useWallet().publicKey.value"
              class="row justify-center"
            >
              <WalletMultiButton dark />
            </q-card-section>

            <q-card-section v-else class="col">
              <q-card bordered flat class="q-mb-md">
                <q-card-section>
                  <div class="col text-center">Wallet Balance</div>
                </q-card-section>
                <q-separator />
                <div class="row q-pa-md">
                  <FormatNumber
                    :number="
                      useAccountStore().getAccountByMintPublicKey(
                        props.row.account.mintUnwrapped,
                      )?.uiAmount
                    "
                    :decimals="4"
                    :pad-start="10"
                  />
                  <q-space />
                  <FormatNumber
                    :number="
                      useAccountStore().getAccountByMintPublicKey(
                        props.row.account.mintWrapped,
                      )?.uiAmount
                    "
                    :decimals="4"
                    :pad-start="10"
                  />
                </div>
              </q-card>
              <div class="row q-gutter-x-md">
                <WrapperWrap class="col" :wrapper="props.row" />
                <WrapperUnwrap class="col" :wrapper="props.row" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
