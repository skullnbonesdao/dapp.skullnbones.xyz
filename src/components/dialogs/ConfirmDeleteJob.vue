<script setup lang="ts">
import { computed, ref } from 'vue';
import { I_Record, useJsonBinStore } from 'stores/globalJsonBin';
const props = defineProps(['job']);
const dialog = ref(false);
</script>

<template>
  <q-btn
    icon="delete"
    color="red"
    flat
    dense
    size="xs"
    @click="dialog = true"
  />

  <q-dialog
    v-model="dialog"
    class="justify-center"
    backdrop-filter="brightness(60%)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none text-h6">
        Are you sure to delete this Job?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" color="primary" v-close-popup />
        <q-btn
          label="Delete"
          color="red"
          @click="useJsonBinStore().remove(job)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
