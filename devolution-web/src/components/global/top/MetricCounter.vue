<script setup lang="ts">
defineProps<{
  icon: string;
  property?: undefined;
}>();
</script>

<template>
  <div class="flex w-20">
    <img :src="icon" class="h-7 mr-1" />
    <span class="self-center whitespace-nowrap">{{ 0 }}</span>
  </div>
</template>
