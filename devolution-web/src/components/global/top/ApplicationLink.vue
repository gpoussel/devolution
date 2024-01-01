<script setup lang="ts">
withDefaults(
  defineProps<{
    route?: string;
    name?: string;
  }>(),
  {
    route: '/',
    name: '[no name]',
  },
);
</script>

<template>
  <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
    <RouterLink :to="route" class="text-sm font-medium text-dark-900 hover:text-green">{{
      name
    }}</RouterLink>
  </li>
</template>
