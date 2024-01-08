<script setup lang="ts">
withDefaults(
  defineProps<{
    enabled: boolean | undefined;
  }>(),
  {
    enabled: true,
  },
);
</script>
<template>
  <button
    type="button"
    class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-transparent"
    :class="{
      'bg-black': enabled,
      'hover:cursor-pointer': enabled,
      'hover:border-white': enabled,
      'bg-gray-400': !enabled,
      'hover:cursor-not-enabled': !enabled,
      'opacity-50': !enabled,
    }"
  >
    <slot />
  </button>
</template>
