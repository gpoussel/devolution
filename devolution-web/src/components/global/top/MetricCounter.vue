<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useMetricStore } from '@/stores/metric';

defineProps<{
  icon: string;
  property: 'popularity' | 'health' | 'bugs';
  percent: boolean;
}>();

const metricStore = useMetricStore();
const metricStoreRefs = storeToRefs(metricStore);
</script>

<template>
  <div class="flex w-20">
    <img :src="icon" class="h-7 mr-1" />
    <span class="self-center whitespace-nowrap"
      >{{ metricStoreRefs[property] }}<template v-if="percent">&nbsp;%</template></span
    >
  </div>
</template>
