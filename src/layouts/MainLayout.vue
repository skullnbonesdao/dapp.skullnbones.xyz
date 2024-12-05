<template>
  <q-layout view="hHh Lpr lff" class="bg-image-dark">
    <q-header :class="useSquadsStore().useSquads ? '' : 'bg-dark'">
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
      <q-card
        flat
        square
        bordered
        class="col q-ma-sm"
        style="background-color: #2d2d2d"
      >
        <div class="row">
          <q-space />
          <WalletMultiButton dark />
          <q-space />
        </div>
        <q-separator />
        <div v-if="useSquadsStore().multisigPDA.length" class="row">
          <q-space />
          <SquadsButton />
          <q-space />
        </div>
        <q-separator />
        <div v-if="useSquadsStore().multisigPDA.length" class="row">
          <q-space />
          <WhitelistInicator />
          <q-space />
        </div>
      </q-card>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 0px">
        <q-list padding class="">
          <q-item
            :to="link.to"
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
            active-class="bg-primary"
            class="col q-ma-sm"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold text-subtitle1">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item> </q-item>
        </q-list>
      </q-scroll-area>
      <div class="col absolute-bottom q-ma-md q-gutter-y-md">
        <q-select
          class="col"
          square
          v-model="useRPCStore().rpc_stored_name"
          :options="RPC_NETWORKS.map((rpc) => rpc.name)"
          label="RPC"
        />

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
import { RPC_NETWORKS } from 'stores/interfaces/RPC_Networks';
import { useGlobalStore } from 'stores/globalStore';
import { version } from 'src/../package.json';
import { WalletMultiButton } from 'solana-wallets-vue';
import { useWhitelistStore } from 'src/solana/whitelist/WhitelistStore';
import { useRPCStore } from 'stores/rpcStore';
import { useQuasar } from 'quasar';
import SquadsButton from 'components/squads/SquadsButton.vue';
import { useSquadsStore } from 'src/solana/squads/SquadsStore';
import WhitelistInicator from 'components/whitelist/WhitelistInicator.vue';

const leftDrawerOpen = ref(false);
const search = ref('');
const $q = useQuasar();

const display_version = ref(version);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

watch(
  () => useRPCStore().rpc_stored_name,
  () => {
    useRPCStore().update_connection();

    $q.notify({
      timeout: 5000,
      message: `Using RPC: ${useRPCStore().rpc_selected.name}`,
      position: 'bottom-right',
      color: 'orange',
    });
  },
);

const links1 = computed(() => {
  let data = [];
  data.push({ icon: 'home', text: 'Home', to: '/' });

  data.push({ icon: 'content_cut', text: 'Cut', to: '/cut' });

  if (
    useWhitelistStore().check_wallet_whitelisted ||
    useGlobalStore().is_admin
  ) {
    data.push({ icon: 'work', text: 'Jobs', to: '/jobs' });
  }

  if (
    useWhitelistStore().check_wallet_whitelisted ||
    useGlobalStore().is_admin
  ) {
    data.push({ icon: 'local_activity', text: 'Raffle', to: '/raffle' });
  }

  data.push({ icon: 'inventory_2', text: 'Wrapper', to: '/wrapper' });

  data.push({
    icon: 'lock_clock',
    text: 'Player Profile',
    to: '/playerprofile',
  });

  data.push({
    icon: 'lock_clock',
    text: 'StarAtlasLocker',
    to: '/staratlaslocker',
  });

  data.push({ icon: 'diversity_3', text: 'Squads.so', to: '/squads' });
  if (useGlobalStore().is_admin || import.meta.env.DEV) {
    data.push({ icon: 'contrast', text: 'Whitelist', to: '/whitelist' });
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
