<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref, watch } from 'vue';
import { useWrapperStore } from 'stores/globalWrapper';
import { useAccountStore } from 'stores/globalAccountStore';
import { UNKNOWN_IMAGE } from 'stores/constants';
import WrapperWrap from 'components/wrapper/WrapperWrap.vue';
import WrapperUnwrap from 'components/wrapper/WrapperUnwrap.vue';
import { useRPCStore } from 'stores/rpcStore';
import { ParsedAccountData } from '@solana/web3.js';
import WrapperVaultDonut from 'components/wrapper/WrapperVaultDonut.vue';

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

const rowsPerPageOptions = computed(() => {
  return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
});

const accountInfo = ref();

loadAccountInfo();

async function loadAccountInfo() {
  accountInfo.value = (
    await useRPCStore().connection.getParsedAccountInfo(
      useWrapperStore().getVault,
    )
  ).value?.data as ParsedAccountData;
}
</script>

<template>
  <div class="q-pa-md">
    <q-table
      grid
      :rows="useWrapperStore().getFactoriesByGroup"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
          <q-card flat bordered>
            <q-card-section class="text-center">
              <q-img
                height="300px"
                :src="
                  useAccountStore().tokenList.find(
                    (t) =>
                      t.address == props.row.account?.mintUnwrapped.toString(),
                  )?.logoURI ?? UNKNOWN_IMAGE
                "
              />
            </q-card-section>
            <q-card-section>
              <div class="row items-center">
                <div class="col text-h6 text-weight-light">Group</div>
                <div class="text-subtitle1">
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
                <div class="col text-h6 text-weight-light">Pair</div>
                <div class="text-subtitle1 row q-gutter-x-xs">
                  <div>
                    {{
                      useAccountStore().tokenList.find(
                        (t) =>
                          t.address ==
                          props.row.account.mintUnwrapped.toString(),
                      ).symbol
                    }}
                  </div>
                  <div>/</div>
                  <div>
                    W{{
                      useAccountStore().tokenList.find(
                        (t) =>
                          t.address ==
                          props.row.account.mintUnwrapped.toString(),
                      ).symbol
                    }}
                  </div>
                </div>
              </div>
              <div class="row items-center">
                <div class="col text-h6 text-weight-light">Address</div>
                <div class="text-subtitle1">
                  {{ props.row.publicKey }}
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions class="row text-h4">
              <div class="col text-center">
                {{ props.row.account.ratio[0] }}
              </div>
              <q-icon size="md" name="swap_horiz" />
              <div class="col text-center">
                {{ props.row.account.ratio[1] }}
              </div>
            </q-card-actions>

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

            <q-card-section class="row q-gutter-x-md">
              <WrapperWrap class="col" :wrapper="props.row" />

              <WrapperUnwrap class="col" :wrapper="props.row" />
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
