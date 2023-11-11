<template>
  <q-layout view="hHh lpR fFf" class="bg-black text-white">
    <q-header elevated class="bg-black q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-img src="src/assets/snb_icon.svg" width="50px"></q-img>

          <q-toolbar-title shrink class="text-weight-bold">
            dAPP S&B
          </q-toolbar-title>
          <q-toolbar-title shrink>for educational purposes</q-toolbar-title>
        </q-btn>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <wallet-connect-button></wallet-connect-button>
        </div>
      </q-toolbar>
      <q-separator class="bg-white"></q-separator>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="240"
      class="fit bg-black text-white"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            :to="link.to"
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            class="flex"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable class="flex">
            <q-item-section avatar>
              <q-icon color="grey" name="sensors" />
            </q-item-section>
            <q-item-section>
              <q-btn-dropdown :label="useGlobalStore().rpc_selected.name">
                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    :key="rpc"
                    v-for="rpc in RPC_NETWORKS"
                    @click="useGlobalStore().rpc_selected = rpc"
                  >
                    <q-item-section>
                      <q-item-label>{{ rpc.name }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import WalletConnectButton from 'components/buttons/WalletButton.vue';
import { RPC_NETWORKS, useGlobalStore } from 'stores/globalStore';
import { Connection } from '@solana/web3.js';

const leftDrawerOpen = ref(false);
const search = ref('');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

watch(
  () => useGlobalStore().rpc_selected,
  () => {
    useGlobalStore().connection = new Connection(
      useGlobalStore().rpc_selected.url,
    );
  },
);

const links1 = ref([
  { icon: 'home', text: 'Home', to: '/' },
  { icon: 'contrast', text: 'Whitelist', to: '/whitelist' },
  { icon: 'local_activity', text: 'Raffle', to: '/raffle' },
  // { icon: 'switch_left', text: 'Wrapper', to: '/wrapper' },
  // { icon: 'currency_exchange', text: 'Escrow', to: '/escrow-service' },
  // { icon: 'flip_camera_android', text: 'Coinflip', to: '/coinflip' },
  // { icon: 'draw', text: 'Token', to: '/token' },
  // { icon: 'fireplace', text: 'Burn', to: '/burner' },
  // { icon: 'account_balance_wallet', text: 'Accounts', to: '/accounts' },
]);
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0, 0, 0, .24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
