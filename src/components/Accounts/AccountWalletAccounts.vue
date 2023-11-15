<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useGlobalWalletStore } from 'stores/globalWallet';
import { format_address } from 'src/functions/format_address';
import SolscanLink from 'components/buttons/SolscanLink.vue';
import SendTokenButton from 'components/buttons/SendTokenButton.vue';
import EditTokenButton from 'components/buttons/EditTokenButton.vue';

const accounts = ref();

const visibleColumns = ref(['account', 'decimals', 'amount', 'edit', 'send']);

const columns = [
  {
    name: 'image',
    required: true,
    align: 'left',
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'account',
    label: 'Account',
    align: 'left',
    sortable: true,
  },
  {
    name: 'mint',
    label: 'Mint',
    align: 'left',
    sortable: true,
  },

  {
    name: 'owner',
    align: 'left',
    label: 'Owner',
    sortable: true,
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
    label: '',
    align: 'right',
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

// const table_data = computed(() => {
//   return;
// });
</script>

<template>
  <div>
    <q-table
      color="primary"
      dark
      flat
      square
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :visible-columns="visibleColumns"
      title="Accounts"
      :rows="useGlobalWalletStore().get_account_map"
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
            val="account"
            label="Account"
          />
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="mint"
            label="Mint"
          />
          <q-toggle
            size="sm"
            v-model="visibleColumns"
            val="owner"
            label="Owner"
          />
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
          <q-td key="image" :props="props">
            <q-avatar color="" size="sm" v-if="props.row.meta?.logoURI">
              <img :src="props.row.meta?.logoURI" />
            </q-avatar>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.meta?.name ?? '-' }}
          </q-td>

          <q-td key="account" :props="props">
            <SolscanLink :address="props.row.pubkey" />
            {{ format_address(props.row.pubkey.toString()) }}
          </q-td>

          <q-td key="mint" :props="props" class="">
            <SolscanLink :address="props.row.info.mint" />
            {{ format_address(props.row.info.mint) }}
          </q-td>

          <q-td key="owner" :props="props">
            <SolscanLink :address="props.row.info.owner" />
            {{ format_address(props.row.info.owner) }}
          </q-td>

          <q-td key="state" :props="props">
            {{ props.row.account.account.data.parsed.info.state }}
          </q-td>
          <q-td key="space" :props="props">
            {{ props.row.account.account.space }}
          </q-td>
          <q-td key="lamports" :props="props">
            {{ props.row.account.account.lamports }}
          </q-td>
          <q-td key="decimals" :props="props">
            {{ props.row.info.tokenAmount.decimals }}
          </q-td>
          <q-td key="amount" class="text-overline" :props="props">
            <div
              :class="
                props.row.info.tokenAmount.uiAmount > 0
                  ? 'text-white'
                  : 'text-yellow'
              "
            >
              {{ props.row.info.tokenAmount.uiAmount.toFixed(2) }}
            </div>
          </q-td>

          <q-td key="send" :props="props" class="q-gutter-x-sm">
            <EditTokenButton
              :amount="props.row.info.tokenAmount.uiAmount"
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
            />
            <SendTokenButton
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass"></style>
