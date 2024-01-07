<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import ModalHeader from './ModalHeader.vue';
import type { ClickAction } from '@/game/design';

const visible = defineModel({
  default: false,
  type: Boolean,
});

const props = defineProps<{
  action?: ClickAction;
}>();

function cancel() {
  visible.value = false;
}
const keyListener = (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    cancel();
  }
};
onMounted(() => {
  window.addEventListener('keydown', keyListener);
});
onUnmounted(() => {
  window.removeEventListener('keydown', keyListener);
});
</script>

<template>
  <Teleport to="body">
    <div class="relative z-40" role="dialog" aria-modal="true" :class="{ hidden: !visible }">
      <div class="fixed inset-0 bg-gray-800 z-30 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-40 w-screen overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-3xl"
          >
            <div class="bg-white p-6">
              <div class="flex items-start">
                <div class="mt-0 text-left grow">
                  <ModalHeader @close="cancel">{{ action?.name }}</ModalHeader>
                  Hello
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
