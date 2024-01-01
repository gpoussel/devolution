<script setup lang="ts">
import ApplicationTitle from './top/ApplicationTitle.vue';
import MetricCounters from './top/MetricCounters.vue';
import ApplicationLinks from './top/ApplicationLinks.vue';
</script>

<template>
  <header class="sticky top-0 z-10 flex-none w-full mx-auto bg-white border-b border-gray-200">
    <div class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl lg:px-4">
      <ApplicationTitle />
      <MetricCounters />
      <ApplicationLinks />
    </div>
  </header>
</template>
