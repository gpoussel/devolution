<script setup lang="ts">
import { storeToRefs } from 'pinia';

import coinIcon from '@/assets/icons/icons8-coin-96.png';
import { useMetricStore } from '@/stores/metric';

import CoinCounter from '../../utils/CoinCounter.vue';

const metricStore = useMetricStore();
const { coins } = storeToRefs(metricStore);
</script>
<template>
  <div class="flex w-32">
    <img :src="coinIcon" class="h-7 mr-1" />
    <CoinCounter :value="coins" class="self-center" />
  </div>
</template>
