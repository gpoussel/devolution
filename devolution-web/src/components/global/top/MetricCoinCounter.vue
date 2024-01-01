<script setup lang="ts">
import { storeToRefs } from 'pinia';

import coinIcon from '@/assets/icons/icons8-coin-96.png';
import CoinCounter from '../../utils/CoinCounter.vue';
import { useMetricStore } from '@/stores/metric';

const metricStore = useMetricStore();
const { coins } = storeToRefs(metricStore);
</script>
<template>
  <div class="flex w-20">
    <img :src="coinIcon" class="h-7 mr-1" />
    <CoinCounter :value="coins" class="self-center whitespace-nowrap" />
  </div>
</template>
