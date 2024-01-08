<script setup lang="ts">
withDefaults(
  defineProps<{
    enabled?: boolean | undefined;
    type?: 'default' | 'danger';
  }>(),
  {
    enabled: true,
    type: 'default',
  },
);
</script>
<template>
  <button
    type="button"
    class="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 border-2 border-transparent"
    :class="{
      'hover:cursor-pointer': enabled,
      'hover:cursor-not-enabled': !enabled,
      'opacity-50': !enabled,
      'bg-gray-400': !enabled,
      'bg-black': enabled && type === 'default',
      'hover:border-gray-400': enabled,
      'bg-red-700': enabled && type === 'danger',
    }"
  >
    <slot />
  </button>
</template>
