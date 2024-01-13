<script setup lang="ts">
import bugIcon from '@/assets/icons/icons8-lady-beetle-96.png';
import hearIcon from '@/assets/icons/icons8-red-heart-96.png';
import starIcon from '@/assets/icons/icons8-star-96.png';

import MetricCoinCounter from './MetricCoinCounter.vue';
import MetricCounter from './MetricCounter.vue';
</script>

<template>
  <div class="flex items-center space-x-6">
    <MetricCoinCounter />
    <MetricCounter property="popularity" :percent="true" :icon="starIcon" />
    <MetricCounter property="health" :percent="true" :icon="hearIcon" />
    <MetricCounter property="bugs" :percent="false" :icon="bugIcon" />
  </div>
</template>
