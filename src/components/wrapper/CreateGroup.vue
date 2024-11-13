<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const groupName = ref();

function createNewGroup() {
  $q.notify('Not implemented');
}
</script>

<template>
  <q-card flat>
    <q-card-section class="q-gutter-y-md">
      <q-input
        filled
        class="col"
        v-model="groupName"
        label="New group name"
        type="text"
      ></q-input>
    </q-card-section>
    <q-card-actions>
      <q-btn
        @click.prevent="createNewGroup()"
        class="full-width"
        color="primary"
        label="Create"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
