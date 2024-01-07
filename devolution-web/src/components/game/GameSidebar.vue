<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useLevelStore } from '@/stores/level';

const levelStore = useLevelStore();
const { lastLevelReached } = storeToRefs(levelStore);

import ProgressWidget from './sidebar/ProgressWidget.vue';
import ReleaseWidget from './sidebar/ReleaseWidget.vue';
import SuccessWidget from './sidebar/SuccessWidget.vue';
</script>
<template>
  <div class="flex flex-col gap-8 items-stretch">
    <ProgressWidget v-if="!lastLevelReached" />
    <ReleaseWidget v-if="!lastLevelReached" />
    <SuccessWidget v-if="lastLevelReached" />
  </div>
</template>
