<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMetricStore } from '@/stores/metric';
import ApplicationTitle from './top/ApplicationTitle.vue';
import ApplicationLinks from './top/ApplicationLinks.vue';

const metricStore = useMetricStore();
const { formattedCoins } = storeToRefs(metricStore);
</script>

<template>
  <header class="sticky top-0 z-10 flex-none w-full mx-auto bg-white border-b border-gray-200">
    <div class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl lg:px-4">
      <ApplicationTitle />
      <div class="flex items-center space-x-6">
        <div class="flex w-20">
          <img src="../../assets/icons/icons8-coin-96.png" class="h-7 mr-1" />
          <span class="self-center whitespace-nowrap">{{ formattedCoins }}</span>
        </div>
        <div class="flex w-20">
          <img src="../../assets/icons/icons8-star-96.png" class="h-7 mr-1" />
          <span class="self-center whitespace-nowrap">12345</span>
        </div>
        <div class="flex w-20">
          <img src="../../assets/icons/icons8-red-heart-96.png" class="h-7 mr-1" />
          <span class="self-center whitespace-nowrap">12345</span>
        </div>
        <div class="flex w-20">
          <img src="../../assets/icons/icons8-lady-beetle-96.png" class="h-7 mr-1" />
          <span class="self-center whitespace-nowrap">12345</span>
        </div>
      </div>
      <ApplicationLinks />
    </div>
  </header>
</template>
