<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          v-close-popup
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-img src="snb_icon.svg" width="50px"></q-img>

          <q-toolbar-title shrink class="text-weight-bold">
            dAPP S&B
          </q-toolbar-title>
          <q-toolbar-title shrink>for educational purposes</q-toolbar-title>
        </q-btn>
        <q-space />
        <!--        <div class="q-my-sm">-->
        <!--          <WalletMultiButton dark class="items-center"></WalletMultiButton>-->
        <!--        </div>-->
      </q-toolbar>
      <q-separator class="bg-white"></q-separator>
    </q-header>

    <q-drawer
      bordered
      v-model="leftDrawerOpen"
      show-if-above
      :width="230"
      :breakpoint="300"
    >
      <div class="row q-mt-md">
        <q-space />
        <WalletMultiButton dark class="items-center"></WalletMultiButton>
        <q-space />
      </div>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 0px">
        <q-list padding class="">
          <q-item
            :to="link.to"
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            class="col bg-black q-ma-md"
          >
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item> </q-item>
        </q-list>
      </q-scroll-area>
      <div class="col absolute-bottom q-ma-md q-gutter-y-md">
        <div class="row">
          <q-space />
          <q-btn-dropdown
            square
            color="primary"
            :label="useGlobalStore().rpc_selected.name"
          >
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
import { computed, ref, watch } from 'vue';
import { RPC_NETWORKS, useGlobalStore } from 'stores/globalStore';
import { version } from 'src/../package.json';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import { useWhitelist } from '../stores/globalWhitelist';
import { DiscordMessageType, useRaffleStore } from 'stores/globalRaffle';

const leftDrawerOpen = ref(false);
const search = ref('');

const display_version = ref(version);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

watch(
  () => useGlobalStore().rpc_selected,
  () => {
    useGlobalStore().update_connection();
  },
);

watch(
  () => useWallet().publicKey.value,
  async () => {
    if (useWallet().publicKey.value) await useWhitelist().update_whitelist();
  },
);

const links1 = computed(() => {
  let data = [
    { icon: 'home', text: 'Home', to: '/' },
    { icon: 'contact_mail', text: 'Accounts', to: '/accounts' },
  ];
  if (useGlobalStore().is_admin || import.meta.env.DEV) {
    data.push({ icon: 'contrast', text: 'Whitelist', to: '/whitelist' });
  }

  if (useWhitelist().check_wallet_whitelisted || useGlobalStore().is_admin) {
    data.push({ icon: 'local_activity', text: 'Raffle', to: '/raffle' });
  }

  return data;
});
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
