<script setup lang="ts">
import { type ComponentInternalInstance, computed, getCurrentInstance } from 'vue';

import IconClose from '@/assets/svg/icon-close.svg';

withDefaults(
  defineProps<{
    canClose?: boolean;
  }>(),
  {
    canClose: true,
  },
);
defineEmits(['close']);

const currentInstance = getCurrentInstance() as ComponentInternalInstance;
const closeHandlerDefined = computed(() => {
  return currentInstance.vnode?.props?.onClose;
});
</script>
<template>
  <div class="flex grow items-center justify-between rounded-t">
    <h3 class="text-base font-semibold leading-6"><slot /></h3>
    <button
      type="button"
      class="text-gray-400 hover:text-gray-800 rounded-lg text-sm p-2 ms-auto inline-flex justify-center items-center"
      v-if="closeHandlerDefined"
      @click="$emit('close')"
    >
      <IconClose class="w-3 h-3" />
      <span class="sr-only">Close modal</span>
    </button>
  </div>
</template>
