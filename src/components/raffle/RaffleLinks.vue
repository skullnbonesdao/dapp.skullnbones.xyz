<script setup lang="ts">
import SolscanIcon from 'components/icons/SolscanIcon.vue';
import { ref } from 'vue';

const props = defineProps(['raffle', 'entrants']);
const pagination = ref({
  rowsPerPage: 0,
});
</script>

<template>
  <q-card bordered flat square class="row items-center q-pa-md">
    <div class="col q-gutter-y-sm">
      <div>Raffle account</div>
      <div>Entrants account</div>
      <div>Use Whitelist?</div>
    </div>

    <div class="col q-gutter-y-sm">
      <q-btn
        class="full-width"
        size="xs"
        square
        color="primary"
        :href="'https://solscan.io/account/' + props.raffle.publicKey"
        target="_blank"
      >
        <SolscanIcon />
      </q-btn>

      <q-btn
        class="full-width"
        square
        size="xs"
        color="primary"
        :href="'https://solscan.io/account/' + props.raffle.account.entrants"
        target="_blank"
      >
        <SolscanIcon />
      </q-btn>
      <q-icon name="check" v-if="raffle.account.useWhitelist"></q-icon>
      <q-icon name="clear" v-else></q-icon>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
