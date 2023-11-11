<template>
  <q-layout view="lHh Lpr lff" class="bg-black text-white">
    <q-header class="bg-black">
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
      </q-toolbar>
      <q-separator class="bg-white"></q-separator>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      :breakpoint="400"
      class="bg-black"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 20px">
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
      <div class="col absolute-bottom q-ma-md q-gutter-y-md">
        <div class="row">
          <q-space />
          <WalletMultiButton class="items-center"></WalletMultiButton>
          <q-space />
        </div>
        <div class="row">
          <q-space />
          <q-badge class="items-center">v{{ display_version }}</q-badge>
          <q-space />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RPC_NETWORKS, useGlobalStore } from 'stores/globalStore';
import { Connection } from '@solana/web3.js';
import { WalletMultiButton } from 'solana-wallets-vue';
import { version } from 'src/../package.json';

const leftDrawerOpen = ref(false);
const search = ref('');

const display_version = ref(version);

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
  { icon: 'local_activity', text: 'Raffle', to: '/raffle' },
]);

if (useGlobalStore().is_admin || import.meta.env.DEV) {
  links1.value.push({ icon: 'contrast', text: 'Whitelist', to: '/whitelist' });
}
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
