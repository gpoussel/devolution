<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { PROGRESS_LEVELS } from '@/game/design';

import { useLevelStore } from '@/stores/level';
import { useMetricStore } from '@/stores/metric';
import CoinPerSecondCounter from '../../utils/CoinPerSecondCounter.vue';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

const metricStore = useMetricStore();
const { coinsPerSecond } = storeToRefs(metricStore);
</script>

<template>
  <div class="flex flex-col items-stretch">
    <p class="text-xl font-bold" v-text="PROGRESS_LEVELS[level].name"></p>
    <p>Current level: {{ level }}</p>
    <p>Current earnings: <CoinPerSecondCounter :value="coinsPerSecond" /></p>
  </div>
</template>
