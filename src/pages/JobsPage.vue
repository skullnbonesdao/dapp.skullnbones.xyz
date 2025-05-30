<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useJsonBinStore } from 'stores/globalJsonBin';
import { watchDeep } from '@vueuse/core';
import CreateNewJobDialog from 'components/dialogs/CreateNewJobDialog.vue';
import { useGlobalStore } from 'stores/globalStore';
import ConfirmDeleteJob from 'components/dialogs/ConfirmDeleteJob.vue';
import ExportJobs from 'components/dialogs/ExportJobs.vue';

onMounted(async () => {
  let data = await useJsonBinStore().read();
  console.log(data);
});

const jobTypes = ref([
  {
    id: 0,
    name: 'Todo',
    description: "Task is pending and hasn't started yet",
    color: 'purple',
  },
  {
    id: 1,
    name: 'In Progress',
    description: 'Task is actively being worked on',
    color: 'yellow-7',
  },
  {
    id: 2,
    name: 'On-hold',
    description: 'Task is paused and waiting to be resumed',
    color: 'orange-7',
  },
  {
    id: 4,
    name: 'Payout',
    description: 'Task is completed and awaiting payout',
    color: 'blue-7',
  },
  {
    id: 3,
    name: 'Done',
    description: 'Task is fully completed and finalized',
    color: 'green',
  },
]);

watchDeep(
  () => useJsonBinStore().data.record,
  () => {
    useJsonBinStore().update();
  },
);

const is_admin = ref(useGlobalStore().is_admin || import.meta.env.DEV);

function startDrag(evt, item) {
  evt.dataTransfer.dropEffect = 'move';
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('itemID', item.timestamp);
}

function onDrop(evt, newID) {
  const elementTS = evt.dataTransfer.getData('itemID');
  const idx = useJsonBinStore().data.record.findIndex(
    (rec) => rec.timestamp == elementTS,
  );
  useJsonBinStore().data.record[idx].jobType = newID;
}
</script>

<template>
  <q-page class="col q-pa-sm bg-black">
    <div class="row q-pa-sm q-gutter-x-sm">
      <q-space />
      <ExportJobs />
      <CreateNewJobDialog :job-types="jobTypes" v-if="is_admin" />
    </div>
    <div class="row q-gutter-x-sm">
      <div
        class="col"
        v-for="jobType in jobTypes"
        :key="jobType"
        @drop="onDrop($event, jobType.id)"
        @dragover.prevent
        @dragenter.prevent
      >
        <q-card flat square class="q-pa-sm">
          <div class="row items-center q-gutter-x-sm">
            <q-badge rounded :color="jobType.color" text-color="black">
            </q-badge>
            <div class="col text-h5">{{ jobType.name }}</div>
          </div>
          <div class="text-subtitle1 text-weight-light">
            {{ jobType.description }}
          </div>
        </q-card>
        <q-card
          flat
          square
          class="q-pa-sm q-mt-sm"
          v-for="job in useJsonBinStore().data?.record?.filter(
            (job) => job.jobType == jobType.id,
          )"
          :key="job.timestamp"
        >
          <q-card-section
            :draggable="is_admin"
            @dragstart="startDrag($event, job)"
          >
            <div class="row q-mb-md">
              <div class="text-h6 col">
                {{ job.name }}
                <q-popup-edit
                  v-if="is_admin"
                  v-model="job.name"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit>
              </div>
              <ConfirmDeleteJob v-if="is_admin" :job="job" />
            </div>
            <div class="row q-gutter-x-sm">
              <div class="col text-subtitle1 text-weight-light">
                {{ job.description }}
                <q-popup-edit
                  v-if="is_admin"
                  v-model="job.description"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                    type="textarea"
                  />
                </q-popup-edit>
              </div>
            </div>
            <div class="row q-mt-sm">
              <q-badge>
                {{ job.assigned ?? '-none-' }}
                <q-popup-edit
                  v-if="is_admin"
                  v-model="job.assigned"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit>
              </q-badge>
              <q-space />
              <q-badge class="justify-center" color="grey">
                {{ job.reward ?? '-none-' }}
                <q-popup-edit
                  v-if="is_admin"
                  v-model="job.reward"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit>
              </q-badge>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
