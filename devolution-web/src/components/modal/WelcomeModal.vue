<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  visibleOnLoad: Boolean,
});

const visible = ref(props.visibleOnLoad);

function close() {
  visible.value = false;
}
</script>

<template>
  <div class="relative z-40" role="dialog" aria-modal="true" :class="{ hidden: !visible }">
    <div class="fixed inset-0 bg-gray-800 z-30 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-40 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white p-6">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6">Welcome to Devolution!</h3>
                <div class="mt-2">
                  <p class="text-sm">
                    Devolution is an incremental game where you play as a game developer under
                    pressure! Your goal is to earn as many Crunches as possible by creating and
                    releasing games. But be careful, you also have to balance your popularity,
                    health and bugs.
                  </p>
                  <p class="text-sm mt-4">
                    Devolution is a game about the challenges and rewards of game development. But
                    remember, every action has a cost and a consequence. The more you work, the more
                    pressure you will face. Can you handle it?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-green p-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="close()"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
            >
              Let's go!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
