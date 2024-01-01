<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { useMetricStore } from '@/stores/metric';
import { storeToRefs } from 'pinia';

import CoinCounter from '../utils/CoinCounter.vue';
import DevelopmentBarAction from './development/DevelopmentBarAction.vue';
import DevelopmentBarTitle from './development/DevelopmentBarTitle.vue';
import DevelopmentBarText from './development/DevelopmentBarText.vue';

const metricStore = useMetricStore();
const { formattedCoinsPerSecond } = storeToRefs(metricStore);

function setCoins(value: number) {
  metricStore.setCoins(new Decimal(value));
}
function setCoinsPerSecond(value: number) {
  metricStore.setCoinsPerSecond(new Decimal(value));
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
    <DevelopmentBarTitle>DEV</DevelopmentBarTitle>
    <DevelopmentBarAction @click="setCoins(0)">
      <CoinCounter :value="new Decimal(0)"></CoinCounter>
    </DevelopmentBarAction>
    <DevelopmentBarAction @click="setCoins(1e9)">
      <CoinCounter :value="new Decimal(1e9)"></CoinCounter
    ></DevelopmentBarAction>
    <DevelopmentBarText>CPS : {{ formattedCoinsPerSecond }}</DevelopmentBarText>
    <DevelopmentBarAction @click="setCoinsPerSecond(0)">CPS = 0</DevelopmentBarAction>
    <DevelopmentBarAction @click="setCoinsPerSecond(10)">CPS = 10</DevelopmentBarAction>
    <div class="flex-grow"></div>
    <DevelopmentBarAction type="danger" @click="clearSave()">🗑️</DevelopmentBarAction>
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
