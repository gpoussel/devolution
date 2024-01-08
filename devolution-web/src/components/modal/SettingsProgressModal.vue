<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import IconClipboard from '@/assets/svg/icon-clipboard.svg';
import ModalHeader from '@/components/modal/ModalHeader.vue';

const visible = defineModel({
  default: false,
  type: Boolean,
});

const props = defineProps<{
  title: string;
  buttonText: string;
  content?: string;
}>();

const emit = defineEmits<{
  done: [content: string | undefined];
}>();

function close() {
  visible.value = false;
}

const keyListener = (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    close();
    return;
  }
};

const initialValue = ref('');

onMounted(() => {
  window.addEventListener('keydown', keyListener);
  initialValue.value = props.content || '';
});

onUnmounted(() => {
  window.removeEventListener('keydown', keyListener);
});

const textarea = ref<HTMLTextAreaElement>();

async function selectAndCopy() {
  const element = textarea.value;
  if (element) {
    element.focus();
    element.select();
    await navigator.clipboard.writeText(element.value);
  }
}

async function select() {
  const element = textarea.value;
  if (element) {
    element.focus();
    element.select();
  }
}

function done() {
  emit('done', textarea.value?.value);
}
</script>

<template>
  <Teleport to="body">
    <div class="relative z-40" role="dialog" aria-modal="true" :class="{ hidden: !visible }">
      <div class="fixed inset-0 bg-gray-800 z-30 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-40 w-screen overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-start">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-3xl"
          >
            <div class="bg-white p-6">
              <div class="flex items-start">
                <div class="mt-0 text-left grow">
                  <ModalHeader @close="close">{{ title }}</ModalHeader>
                  <slot name="text" />
                  <div class="relative">
                    <textarea
                      ref="textarea"
                      @focus="content ? selectAndCopy() : select()"
                      class="w-full h-40 p-2 block bg-white border border-dark text-xs"
                      :value="initialValue"
                    ></textarea>
                    <button
                      v-if="content"
                      type="button"
                      class="absolute top-2 end-2 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-dark shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-gray-100 text-xs"
                      @click="selectAndCopy"
                    >
                      <IconClipboard class="text-inherit w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-green p-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-300"
                @click="done"
              >
                {{ buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
