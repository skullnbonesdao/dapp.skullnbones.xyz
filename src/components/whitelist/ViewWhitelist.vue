<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { useWorkspaceWhitelist } from 'src/idls/adapter/whitelist_apapter';

const { program } = useWorkspaceWhitelist();
const whilelists = ref();
const whilelist_entries = ref();

onMounted(async () => {
  whilelists.value = await program.value.account.whitelist.all();

  whilelist_entries.value = await program.value.account.whitelistEntry.all();
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
