<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { useMetricStore } from '@/stores/metric';
import { storeToRefs } from 'pinia';

const metricStore = useMetricStore();
const { formattedCoinsPerSecond } = storeToRefs(metricStore);

function setCoins(value: number) {
  metricStore.setCoins(new Decimal(value));
}
function setCoinsPerSecond(value: number) {
  metricStore.setCoinsPerSecond(new Decimal(value));
}
</script>

<template>
  <footer
    class="text-white text-center fixed inset-x-0 bottom-0 p-2 flex items-center gap-3 border-t-2 border-white"
  >
    <div class="text-lg font-bold">DEV</div>
    <button
      type="button"
      @click="setCoins(0)"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      0 C
    </button>
    <button
      type="button"
      @click="setCoins(1e9)"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      1M C
    </button>
    <p>CPS : {{ formattedCoinsPerSecond }}</p>
    <button
      type="button"
      @click="setCoinsPerSecond(0)"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      CPS = 0
    </button>
     <button
      type="button"
      @click="setCoinsPerSecond(10)"
      class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-dark-700 hover:bg-dark-800"
    >
      CPS = 10
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
