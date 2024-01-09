<script setup lang="ts">
import type { ComponentInternalInstance } from 'vue';
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue';

import { getRandomCodeSnippet } from '@/game/code-snippet';
import type { ClickAction } from '@/game/design';
import VCodeBlock from '@wdns/vue-code-block';

import ModalHeader from './ModalHeader.vue';

const visible = defineModel({
  default: false,
  type: Boolean,
});

defineProps<{
  action?: ClickAction;
}>();

defineEmits(['done']);

function close() {
  visible.value = false;
}

const element = getRandomCodeSnippet();
let position = 0;
const code = ref('');
const completed = ref(false);

function updateCode() {
  code.value = element.code.substring(0, position) + '\u2588';
  completed.value = position === element.code.length;
}

function eraseCode() {
  if (position > 0) {
    --position;
  }
  updateCode();
}

function writeCode() {
  if (position < element.code.length) {
    do {
      position++;
    } while (
      position < element.code.length &&
      (element.code.charAt(position) === '\n' || element.code.charAt(position) === ' ')
    );
  }
  updateCode();
}

updateCode();
const currentInstance = getCurrentInstance() as ComponentInternalInstance;

function done() {
  currentInstance.emit('done');
}

const keyListener = (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    close();
    return;
  }
  if (e.code === 'Backspace') {
    eraseCode();
    return;
  }
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && completed.value) {
    done();
    return;
  }
  writeCode();
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
        <div class="flex min-h-full justify-center p-4 text-center items-start">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-3xl"
          >
            <div class="bg-white p-6">
              <div class="flex items-start">
                <div class="mt-0 text-left grow">
                  <ModalHeader @close="close">{{ action?.name }}</ModalHeader>
                  <div class="text-sm">
                    Write your first lines of code using your keyboard. No development skills
                    required!
                  </div>
                  <VCodeBlock
                    class="mt-4"
                    :copy-button="false"
                    :code="code"
                    :lang="element.language"
                  />
                </div>
              </div>
            </div>
            <div class="bg-green p-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                :disabled="!completed"
                :class="{
                  'hover:bg-gray-300': completed,
                  'hover:cursor-not-allowed': !completed,
                }"
                @click="done"
              >
                Save code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
