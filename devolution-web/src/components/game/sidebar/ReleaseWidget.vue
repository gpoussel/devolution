<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';

import IconCheckCircle from '@/assets/svg/icon-check-circle.svg';
import { PROGRESS_LEVELS } from '@/game/design';
import { useLevelStore } from '@/stores/level';
import { useMetricStore } from '@/stores/metric';

import CoinCounter from '../../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../../utils/CoinPerSecondCounter.vue';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

const metricStore = useMetricStore();
const { coins, coinsPerSecond } = storeToRefs(metricStore);

const requiredCoins = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.coins;
});

const requiredCoinsSatisfied = computed(() => {
  return coins.value.greaterThan(requiredCoins.value);
});

const requiredCoinsPerSecond = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.coinsPerSecond;
});

const requiredCoinsPerSecondSatisfied = computed(() => {
  return coinsPerSecond.value.greaterThan(requiredCoinsPerSecond.value);
});

const allowed = computed(() => {
  return requiredCoinsSatisfied.value && requiredCoinsPerSecondSatisfied.value;
});

function nextLevel() {
  levelStore.nextLevel();
}
</script>

<template>
  <div class="flex flex-col items-stretch">
    <p class="text-xl font-bold">Release</p>
    <p class="text-sm">
      The game can be released when it reaches a certain level of quality, popularity, and
      profitability. When releasing your game, you will move to the next level and lose your income;
      but you will keep your money.
    </p>
    <div class="relative overflow-x-auto rounded-lg mt-4">
      <table class="w-full text-sm text-left rtl:text-right bg-black">
        <tr class="border-b border-gray-400 last:border-0">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Required Money</th>
          <td><CoinCounter :value="requiredCoins" /></td>
          <td class="text-green w-8">
            <IconCheckCircle width="16" v-if="requiredCoinsSatisfied" />
          </td>
        </tr>
        <tr class="border-b border-gray-400 last:border-0">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Required Income</th>
          <td><CoinPerSecondCounter :value="requiredCoinsPerSecond" /></td>
          <td class="text-green w-8">
            <IconCheckCircle width="16" v-if="requiredCoinsPerSecondSatisfied" />
          </td>
        </tr>
      </table>
    </div>
    <div class="flex justify-center mt-4">
      <button
        type="button"
        class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-transparent"
        :class="{
          'bg-black': allowed,
          'hover:cursor-pointer': allowed,
          'hover:border-white': allowed,
          'bg-gray-400': !allowed,
          'hover:cursor-not-allowed': !allowed,
          'opacity-50': !allowed,
        }"
        @click="nextLevel"
      >
        Release Game
      </button>
    </div>
  </div>
</template>
