<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { PROGRESS_LEVELS } from '@/game/design';
import { useMetricStore } from '@/stores/metric';
import { useLevelStore } from '@/stores/level';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

import ProgressWidget from './sidebar/ProgressWidget.vue';
import ReleaseWidget from './sidebar/ReleaseWidget.vue';

const lastLevel = computed(() => {
  return level.value === PROGRESS_LEVELS.length - 1;
});
</script>
<template>
  <div class="flex flex-col gap-8 items-stretch">
    <ProgressWidget />
    <ReleaseWidget v-if="!lastLevel" />
  </div>
</template>
