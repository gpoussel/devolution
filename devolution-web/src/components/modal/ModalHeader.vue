<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { computed } from 'vue';

withDefaults(
  defineProps<{
    canClose?: boolean;
  }>(),
  {
    canClose: true,
  },
);
defineEmits(['close']);

const closeHandlerDefined = computed(() => {
  console.log(getCurrentInstance()?.vnode);
  return getCurrentInstance()?.vnode?.props?.onClose;
});
</script>
<template>
  <div class="flex grow items-center justify-between rounded-t">
    <h3 class="text-base font-semibold leading-6"><slot /></h3>
    <button
      type="button"
      class="text-gray-400 hover:text-gray-900 rounded-lg text-sm p-2 ms-auto inline-flex justify-center items-center"
      v-if="closeHandlerDefined"
      @click="$emit('close')"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
</template>
