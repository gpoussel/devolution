<script setup lang="ts">
import { type ComponentInternalInstance, getCurrentInstance, onMounted, onUnmounted } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'danger';
    shortcut?: string | undefined;
  }>(),
  {
    type: 'default',
  },
);

if (props.shortcut) {
  const currentInstance = getCurrentInstance() as ComponentInternalInstance;
  const keyListener = (e: KeyboardEvent) => {
    if (e.key === props.shortcut) {
      currentInstance.emit('click');
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', keyListener);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', keyListener);
  });
}
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
    <kbd
      v-if="shortcut"
      v-text="shortcut"
      class="absolute -mt-4 -ml-5 px-1 py-0.5 text-xs text-gray-800 bg-gray-300 border border-gray-400 rounded"
    ></kbd>

    <slot />
  </button>
</template>
