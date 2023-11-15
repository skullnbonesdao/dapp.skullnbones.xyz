<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useGlobalWalletStore } from 'stores/globalWallet';
import { format_address } from 'src/functions/format_address';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import SendTokenButton from 'components/buttons/SendTokenButton.vue';
import EditTokenButton from 'components/buttons/EditTokenButton.vue';

const accounts = ref();

const visibleColumns = ref([
  'account',
  'account_link',
  'mint',
  'mint_link',
  'owner',
  'owner_link',
  'decimals',
  'amount',
  'edit',
  'send',
]);

const columns = [
  {
    name: 'account',
    required: true,
    label: 'Account',
    align: 'center',
    sortable: true,
  },
  {
    name: 'account_link',
    align: 'left',
  },

  {
    name: 'mint',
    required: true,
    label: 'Token-Mint',
    align: 'center',
    sortable: true,
  },
  {
    name: 'mint_link',
    align: 'left',
  },
  {
    name: 'owner',
    align: 'center',
    label: 'Owner',
    sortable: true,
  },
  {
    name: 'owner_link',
    align: 'left',
  },
  {
    name: 'state',
    align: 'center',
    label: 'State',
    sortable: true,
  },
  {
    name: 'space',
    label: 'Space',
    sortable: true,
  },
  {
    name: 'lamports',
    label: 'Lamports',
    sortable: true,
  },
  {
    name: 'decimals',
    label: 'Decimals',
    sortable: true,
  },
  {
    name: 'amount',
    label: 'Amount',
    sortable: true,
  },
  {
    label: 'Edit',
    align: 'center',
    name: 'edit',
  },
  {
    label: 'Send',
    align: 'center',
    name: 'send',
  },
];

onMounted(async () => {
  await useGlobalWalletStore().update_accounts();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useGlobalWalletStore().update_accounts();
  },
);
const pagination = ref({ rowsPerPage: 0 });
</script>

<template>
  <div>
    <q-table
      color="primary"
      dark
      flat
      bordered
      square
      dense
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :visible-columns="visibleColumns"
      title="Accounts"
      :rows="useGlobalWalletStore().token_accounts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">Accounts</div>

        <q-space />

        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="space"
            label="Space"
          />
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="lamports"
            label="Lamports"
          />
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="state"
            label="State"
          />
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="decimals"
            label="Decimals"
          />
        </div>
        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="account" :props="props">
            {{ format_address(props.row.pubkey.toString()) }}
          </q-td>
          <q-td key="account_link" :props="props">
            <SolscanLink :address="props.row.pubkey" />
          </q-td>
          <q-td key="mint" :props="props" class="">
            {{ format_address(props.row.account.data.parsed.info.mint) }}
          </q-td>
          <q-td key="mint_link" :props="props">
            <SolscanLink :address="props.row.account.data.parsed.info.mint" />
          </q-td>
          <q-td key="owner" :props="props">
            {{ format_address(props.row.account.data.parsed.info.owner) }}
          </q-td>
          <q-td key="owner_link" :props="props">
            <SolscanLink :address="props.row.account.data.parsed.info.owner" />
          </q-td>
          <q-td key="state" :props="props">
            {{ props.row.account.data.parsed.info.state }}
          </q-td>
          <q-td key="space" :props="props">
            {{ props.row.account.space }}
          </q-td>
          <q-td key="lamports" :props="props">
            {{ props.row.account.lamports }}
          </q-td>
          <q-td key="decimals" :props="props">
            {{ props.row.account.data.parsed.info.tokenAmount.decimals }}
          </q-td>
          <q-td key="amount" :props="props">
            <q-badge
              :color="
                props.row.account.data.parsed.info.tokenAmount.uiAmount > 0
                  ? ''
                  : 'yellow'
              "
            >
              {{
                props.row.account.data.parsed.info.tokenAmount.uiAmount.toFixed(
                  2,
                )
              }}
            </q-badge>
          </q-td>
          <q-td key="edit" :props="props" class="">
            <EditTokenButton
              :amount="props.row.account.data.parsed.info.tokenAmount.uiAmount"
              :mint="props.row.account.data.parsed.info.mint"
              :decimals="
                props.row.account.data.parsed.info.tokenAmount.decimals
              "
            />
          </q-td>
          <q-td key="send" :props="props" class="">
            <SendTokenButton
              :mint="props.row.account.data.parsed.info.mint"
              :decimals="
                props.row.account.data.parsed.info.tokenAmount.decimals
              "
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass"></style>
