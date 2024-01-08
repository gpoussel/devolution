<script setup lang="ts">
defineProps<{
  target: string;
}>();
</script>
<template>
  <a class="text-blue hover:text-blue-200" target="_blank" :href="target"><slot /></a>
</template>
