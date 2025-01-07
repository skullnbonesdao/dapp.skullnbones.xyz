<script setup lang="ts">
import { useWrapperStore } from 'src/solana/wrapper/WrapperStore';
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['asTabs']);

const tab = ref('DACBloon');

useWrapperStore().groupSelected = useWrapperStore().groups.find(
  (g) => g.account.name == tab.value,
);

watch(
  () => tab.value,
  () => {
    useWrapperStore().groupSelected = useWrapperStore().groups.find(
      (g) => g.account.name == tab.value,
    );
  },
);
</script>

<template>
  <q-card bordered flat class="">
    <q-tabs
      v-model="tab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      v-if="asTabs"
    >
      <q-tab
        v-for="group in useWrapperStore().groups"
        v-bind:name="group.account.name.toString()"
        :key="group"
      >
        {{ group.account.name.toString() }}
      </q-tab>
    </q-tabs>

    <q-select
      v-else
      label="Select a group"
      square
      filled
      @update:model-value="
        () => (useWrapperStore().wrapperSelected = undefined)
      "
      v-model="useWrapperStore().groupSelected"
      :options="useWrapperStore().groups"
      :option-label="(option) => option?.account?.name"
    ></q-select>
  </q-card>
</template>

<style scoped lang="sass"></style>
