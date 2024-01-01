<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMetricStore } from '@/stores/metric';

const metricStore = useMetricStore();
const storeProperties = storeToRefs(metricStore);

defineProps<{
  icon: string;
  property?: 'formattedCoins' | undefined;
}>();
</script>
<template>
  <div class="flex w-20">
    <img :src="icon" class="h-7 mr-1" />
    <span class="self-center whitespace-nowrap">{{
      property ? storeProperties[property].value : 0
    }}</span>
  </div>
</template>
