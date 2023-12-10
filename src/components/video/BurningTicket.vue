<script setup lang="ts">
import { onMounted, ref } from 'vue';

const ticket_burning = ref();

onMounted(() => {
  ticket_burning.value.playbackRate = 0.3;
  console.log(ticket_burning.value);
});
</script>

<template>
  <video ref="ticket_burning" autoplay playbackspeed="0.1">
    <source src="Burningticket.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<style scoped lang="sass"></style>
