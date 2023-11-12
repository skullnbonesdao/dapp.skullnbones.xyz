<script setup lang="ts">
import { ref, watch } from 'vue';
import * as factory from '@staratlas/factory';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { biAward } from '@quasar/extras/bootstrap-icons';

const props = defineProps(['count', 'function_name', 'publicKey']);

const data = ref();

const SYSTEM_PROGRAM = '11111111111111111111111111111111';

const ATLAS_LOCKER_PROGRAM = 'ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc';
const POLIS_MINT = 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk';
const ATLAS_MINT = 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx';

async function run_querry() {
  switch (props.function_name) {
    case 'getStakingAccount':
      {
        //7AUgG8ghecQYopPqVVnjL4x79VeA93TQRLFcQq4Mqehd
        data.value = await factory.getStakingAccount(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(props.publicKey),
          new PublicKey('J5GhV1WKcEU98c1kZt36ixjaErrrPNWbZhg3JQDg114E'),
        );
      }
      break;

    case 'getRegisteredStake':
      {
        //J5GhV1WKcEU98c1kZt36ixjaErrrPNWbZhg3JQDg114E
        data.value = await factory.getRegisteredStake(
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(ATLAS_LOCKER_PROGRAM),
          new PublicKey(ATLAS_MINT),
          new PublicKey(ATLAS_MINT),
        );
      }
      break;
    default:
      data.value = 'No function called';
      break;
  }
}

watch(
  () => props.count,
  async () => {
    await run_querry();
  },
);
</script>

<template>
  <q-card class="row q-pa-md">
    <div class="col text-h6">{{ function_name }}:</div>
    <div class="text-overline">{{ data }}</div>
  </q-card>
</template>

<style scoped lang="sass"></style>
