<script setup lang="ts">
import { computed, ref } from 'vue';
import { I_Record, useJsonBinStore } from 'stores/globalJsonBin';
const dialog = ref(false);
const tab = ref('csv');

const text_json = computed(() => {
  return JSON.stringify(useJsonBinStore().data.record, null, 2);
});

const text_csv = computed(() => {
  const array = useJsonBinStore().data.record;
  let csv = '';

  // Get the headers
  const headers = Object.keys(array[0]);
  csv += headers.join(',') + '\n';

  // Loop through the data
  array.forEach((row) => {
    csv += headers.map((header) => `"${row[header]}"`).join(',') + '\n';
  });

  return csv;
});
</script>

<template>
  <q-btn icon="file_download" round color="primary" @click="dialog = true" />

  <q-dialog
    full-width
    v-model="dialog"
    class="justify-center"
    backdrop-filter="brightness(60%)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none text-h6">
        Export
      </q-card-section>
      <q-card-section>
        <q-tabs v-model="tab">
          <q-tab name="csv" label="CSV" />
          <q-tab name="json" label="JSON" />
        </q-tabs>
      </q-card-section>

      <q-input
        v-if="tab == 'json'"
        v-model="text_json"
        filled
        type="textarea"
      />
      <q-input v-if="tab == 'csv'" v-model="text_csv" filled type="textarea" />

      <q-card-actions align="right">
        <q-btn label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
