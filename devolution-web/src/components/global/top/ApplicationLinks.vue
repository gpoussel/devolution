<script setup lang="ts">
import ApplicationLink from './ApplicationLink.vue';
</script>

<template>
  <div class="flex items-center">
    <ul class="flex-col pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
      <ApplicationLink route="/about" name="About" />
      <ApplicationLink route="/settings" name="Settings" />
    </ul>
  </div>
</template>
