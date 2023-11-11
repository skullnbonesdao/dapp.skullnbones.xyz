<script setup lang="ts">
import IconFromSeed from 'components/icons/IconFromSeed.vue';

console.log(import.meta.env.VITE_SOME_KEY); // 123
console.log(import.meta.env.DB_PASSWORD);
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>
      {{ p }}
      <h1>devAPP</h1>
      <h2>Skull&Bones</h2>
      <!--      <TestCanvas />-->
      <IconFromSeed seed="devApp" />
    </div>
  </q-page>
</template>
