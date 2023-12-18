<script setup lang="ts">
import SolscanIcon from 'components/icons/SolscanIcon.vue';
import { format_address } from '../../functions/format_address';
import { ref } from 'vue';

const props = defineProps(['raffle', 'entrants']);
const pagination = ref({
  rowsPerPage: 0,
});
</script>

<template>
  <div class="row items-center q-ma-md">
    <div class="col q-gutter-y-sm">
      <div>Raffle account</div>
      <div>Entrants account</div>
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
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
