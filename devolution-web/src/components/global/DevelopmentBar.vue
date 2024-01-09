<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { storeToRefs } from 'pinia';

import { useMetricStore } from '@/stores/metric';
import { useTechnicalStore } from '@/stores/technical';

import CoinCounter from '../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../utils/CoinPerSecondCounter.vue';
import DevelopmentBarAction from './development/DevelopmentBarAction.vue';
import DevelopmentBarText from './development/DevelopmentBarText.vue';
import DevelopmentBarTitle from './development/DevelopmentBarTitle.vue';

const metricStore = useMetricStore();
const { coinsPerSecond } = storeToRefs(metricStore);

const technicalStore = useTechnicalStore();
const { ticking } = storeToRefs(technicalStore);

function setCoins(value: number) {
  metricStore.setCoins(new Decimal(value));
}
function setCoinsPerSecond(value: number) {
  metricStore.setCoinsPerSecond(new Decimal(value));
}

function clearSave() {
  technicalStore.clearSave();
}

const coinValues = [0, 1e9];
const coinPerSecondValues = [0, 10, 100, 8450];
</script>

<template>
  <footer
    class="text-white text-center fixed z-50 inset-x-0 bottom-0 p-2 flex gap-3 border-t-2 border-white"
  >
    <DevelopmentBarTitle class="flex items-center"
      >DEV
      <span class="relative flex h-3 w-3 ml-2">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          v-if="ticking"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3"
          :class="{
            'bg-red-500': !ticking,
            'bg-white': ticking,
          }"
        ></span>
      </span>
      <span class="flex ml-1 w-2 h-2 rounded-full"></span
    ></DevelopmentBarTitle>
    <DevelopmentBarAction
      @click="setCoins(coinValue)"
      v-for="(coinValue, key) of coinValues"
      :key="coinValue"
      :shortcut="key === coinValues.length - 1 ? '&' : undefined"
    >
      <CoinCounter :value="Decimal.fromNumber(coinValue)"></CoinCounter>
    </DevelopmentBarAction>
    <DevelopmentBarText>CPS: <CoinPerSecondCounter :value="coinsPerSecond" /></DevelopmentBarText>
    <DevelopmentBarAction
      @click="setCoinsPerSecond(coinPerSecondValue)"
      v-for="(coinPerSecondValue, key) of coinPerSecondValues"
      :key="coinPerSecondValue"
      :shortcut="key === coinPerSecondValues.length - 1 ? 'é' : undefined"
      >CPS =&nbsp;<CoinPerSecondCounter :value="Decimal.fromNumber(coinPerSecondValue)"
    /></DevelopmentBarAction>
    <div class="flex-grow"></div>
    <DevelopmentBarAction type="danger" @click="clearSave()" shortcut="d">🗑️</DevelopmentBarAction>
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
