<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'default' | 'danger';
  }>(),
  {
    type: 'default',
  },
);
</script>
<template>
  <button
    type="button"
    class="px-3 py-2 text-xs font-medium text-center inline-flex self-center text-white"
    :class="{
      'bg-dark-700': type === 'default',
      'hover:bg-dark-800': type == 'default',
      'bg-red-700': type === 'danger',
      'hover:bg-red-800': type == 'danger',
    }"
  >
    <slot />
  </button>
</template>
