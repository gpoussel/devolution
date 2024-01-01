<script setup lang="ts">
import Decimal from 'break_infinity.js';

import { useMetricStore } from '@/stores/metric';

const metricStore = useMetricStore();

function setCoins(value: number) {
  metricStore.setCoins(new Decimal(value));
}

function setToZero() {
  setCoins(0);
}

function setToOneMillion() {
  setCoins(1e9);
}

function clearSave() {
  window.localStorage.clear();
  window.document.location.reload();
}
</script>

<template>
  <footer
    class="text-white text-center fixed z-50 inset-x-0 bottom-0 p-2 flex gap-3 border-t-2 border-white"
  >
    <div class="text-lg font-bold">DEV</div>
    <button
      type="button"
      @click="setToZero()"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      0 C
    </button>
    <button
      type="button"
      @click="setToOneMillion()"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      1M C
    </button>
    <div class="flex-grow"></div>
    <button
      type="button"
      @click="clearSave()"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 hover:bg-red-800"
    >
      🗑
    </button>
  </footer>
</template>

<style scoped>
/* Background generated on https://www.magicpattern.design/tools/css-backgrounds */
footer {
  background-color: #3ca370;
  opacity: 1;
  background-image: repeating-linear-gradient(
      45deg,
      rgba(39, 39, 54, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(39, 39, 54, 0.1) 75%,
      rgba(39, 39, 54, 0.1)
    ),
    repeating-linear-gradient(
      45deg,
      rgba(39, 39, 54, 0.1) 25%,
      #3ca370 25%,
      #3ca370 75%,
      rgba(39, 39, 54, 0.1) 75%,
      rgba(39, 39, 54, 0.1)
    );
  background-position:
    0 0,
    14px 14px;
  background-size: 28px 28px;
}
</style>
