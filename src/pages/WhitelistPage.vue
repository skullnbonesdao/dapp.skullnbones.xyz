<script setup lang="ts">
import { ref } from 'vue';
import CreateWhitelist from 'components/whitelist/CreateWhitelist.vue';
import AddAddressToWhitelist from 'components/whitelist/AddAddressToWhitelist.vue';
import ViewWhitelist from 'components/whitelist/ViewWhitelist.vue';
import RemoveAddressFromWhitelist from 'components/whitelist/RemoveAddressFromWhitelist.vue';
import DeleteWhitelist from 'components/whitelist/DeleteWhitelist.vue';

const selected_tab = ref('view');
</script>

<template>
  <q-page class="bg-black">
    <q-card flat>
      <q-card-section class="row items-center q-gutter-x-md">
        <q-icon name="contrast" size="md" />
        <div class="col text-h6">Whitelists Manager</div>
      </q-card-section>
      <q-separator />
      <q-tabs
        no-caps
        outside-arrows
        mobile-arrows
        v-model="selected_tab"
        class="shadow-2 bg-dark"
        align="justify"
      >
        <q-tab name="create" label="Create Whitelist" />
        <q-tab name="add" label="Add Address to Whitelist" />
        <q-tab name="remove" label="Remove address from Whitelist" />
        <q-tab name="delete" label="Delete Whitelist" />
        <q-tab name="view" label="View " />
      </q-tabs>
      <q-separator />

      <q-tab-panels dark v-model="selected_tab" animated>
        <q-tab-panel name="create">
          <CreateWhitelist />
        </q-tab-panel>

        <q-tab-panel name="add"> <AddAddressToWhitelist /> </q-tab-panel>

        <q-tab-panel name="remove">
          <RemoveAddressFromWhitelist />
        </q-tab-panel>

        <q-tab-panel name="delete">
          <DeleteWhitelist />
        </q-tab-panel>

        <q-tab-panel name="view"> <ViewWhitelist /> </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
