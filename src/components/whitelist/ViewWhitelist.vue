<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import {
  initWorkspaceAdapter,
  useWorkspaceAdapter,
} from 'src/idls/adapter/apapter';

const whilelists = ref();
const whilelist_entries = ref();

onMounted(async () => {
  const { pg_whitelist } = useWorkspaceAdapter();

  whilelists.value = await pg_whitelist.value.account.whitelist.all();

  whilelist_entries.value =
    await pg_whitelist.value.account.whitelistEntry.all();
});

const tree_nodes = computed(() => {
  return whilelists?.value?.map((list: any) => {
    return {
      label: `${list.account.name} | ${list.publicKey.toString()}`,
      children: whilelist_entries.value
        ?.filter(
          (entry: any) =>
            entry.account.parent.toString() === list.publicKey.toString(),
        )
        ?.flatMap((entry: any) => {
          return {
            label: `Member: ${entry.account.whitelisted.toString()}  |  Account: ${entry.publicKey.toString()} `,
          };
        }),
    };
  });
});

//anchor.setProvider(provider);
</script>

<template>
  <div class="row q-gutter-x-md">
    <q-tree
      v-if="tree_nodes"
      :nodes="tree_nodes"
      node-key="label"
      selected-color="primary"
      default-expand-all
    />
  </div>
</template>

<style scoped lang="sass"></style>
