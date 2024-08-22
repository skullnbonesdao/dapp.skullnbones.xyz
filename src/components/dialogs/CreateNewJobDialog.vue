<script setup lang="ts">
import { computed, ref } from 'vue';
import { I_Record, useJsonBinStore } from 'stores/globalJsonBin';
const props = defineProps(['jobTypes']);
const dialog = ref(false);

const newJob = ref<I_Record>({
  jobType: 0,
} as I_Record);

const addEnabled = computed(() => {
  if (newJob.value.name && newJob.value.description) return false;
  else return true;
});
</script>

<template>
  <q-btn round color="primary" icon="add" @click="dialog = true" />

  <q-dialog
    v-model="dialog"
    class="justify-center"
    backdrop-filter="brightness(60%)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none text-h6">
        Create new Job
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="newJob.jobType"
          :options="jobTypes"
          option-value="id"
          option-label="name"
          option-disable="inactive"
          label="JobType*"
          emit-value
          map-options
        />
        <q-input v-model="newJob.name" label="Label*" />
        <q-input
          v-model="newJob.description"
          label="Description*"
          type="textarea"
        />
        <div class="row">
          <q-input v-model="newJob.assigned" label="Assigned" />
          <q-input v-model="newJob.reward" label="Reward" />
        </div>
      </q-card-section>

      <q-card-actions>
        <div class="text-subtitle2 text-weight-thin">*required</div>
        <q-space />
        <q-btn label="Close" color="primary" v-close-popup />
        <q-btn
          :disable="addEnabled"
          label="Add"
          color="primary"
          @click="useJsonBinStore().add(newJob)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
