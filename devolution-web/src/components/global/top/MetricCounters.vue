<script setup lang="ts">
import coinIcon from '@/assets/icons/icons8-coin-96.png';
import starIcon from '@/assets/icons/icons8-star-96.png';
import hearIcon from '@/assets/icons/icons8-red-heart-96.png';
import bugIcon from '@/assets/icons/icons8-lady-beetle-96.png';
import MetricCounter from './MetricCounter.vue';
</script>

<template>
  <div class="flex items-center space-x-6">
    <MetricCounter :icon="coinIcon" property="formattedCoins" />
    <MetricCounter :icon="starIcon" />
    <MetricCounter :icon="hearIcon" />
    <MetricCounter :icon="bugIcon" />
  </div>
</template>
