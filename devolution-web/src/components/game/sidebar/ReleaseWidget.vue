<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';

import IconCheckCircle from '@/assets/svg/icon-check-circle.svg';
import { PROGRESS_LEVELS } from '@/game/design';
import { useActionStore } from '@/stores/action';
import { useLevelStore } from '@/stores/level';
import { useMetricStore } from '@/stores/metric';

import AppButton from '../../utils/AppButton.vue';
import CoinCounter from '../../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../../utils/CoinPerSecondCounter.vue';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

const metricStore = useMetricStore();
const { coins, coinsPerSecond, popularity, health, bugs } = storeToRefs(metricStore);

const actionStore = useActionStore();

const requiredCoins = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.coins;
});

const requiredCoinsSatisfied = computed(() => {
  return coins.value.greaterThanOrEqualTo(requiredCoins.value);
});

const minPopularity = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.minPopularity;
});

const minPopularitySatisfied = computed(() => {
  return popularity.value >= minPopularity.value;
});

const minHealth = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.minHealth;
});

const minHealthSatisfied = computed(() => {
  return !minHealth.value || health.value >= minHealth.value;
});

const maxBugs = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.maxBugs;
});

const maxBugsSatisfied = computed(() => {
  return !maxBugs.value || bugs.value <= maxBugs.value;
});

const requiredCoinsPerSecond = computed(() => {
  return PROGRESS_LEVELS[level.value].releaseCondition.coinsPerSecond;
});

const requiredCoinsPerSecondSatisfied = computed(() => {
  return coinsPerSecond.value.greaterThanOrEqualTo(requiredCoinsPerSecond.value);
});

const allowed = computed(() => {
  return (
    requiredCoinsSatisfied.value &&
    requiredCoinsPerSecondSatisfied.value &&
    minPopularitySatisfied.value &&
    minHealthSatisfied.value &&
    maxBugsSatisfied.value
  );
});

function nextLevel() {
  metricStore.resetAfterRelease();
  actionStore.resetAfterRelease();
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
            <IconCheckCircle class="text-inherit" width="16" v-if="requiredCoinsSatisfied" />
          </td>
        </tr>
        <tr class="border-b border-gray-400 last:border-0">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Required Income</th>
          <td><CoinPerSecondCounter :value="requiredCoinsPerSecond" /></td>
          <td class="text-green w-8">
            <IconCheckCircle
              class="text-inherit"
              width="16"
              v-if="requiredCoinsPerSecondSatisfied"
            />
          </td>
        </tr>
        <tr class="border-b border-gray-400 last:border-0" v-if="minPopularity">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Required Popularity</th>
          <td>{{ minPopularity }}%</td>
          <td class="text-green w-8">
            <IconCheckCircle class="text-inherit" width="16" v-if="minPopularitySatisfied" />
          </td>
        </tr>
        <tr class="border-b border-gray-400 last:border-0" v-if="minHealth">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Required Health</th>
          <td>{{ minHealth }}%</td>
          <td class="text-green w-8">
            <IconCheckCircle class="text-inherit" width="16" v-if="minHealthSatisfied" />
          </td>
        </tr>
        <tr class="border-b border-gray-400 last:border-0" v-if="maxBugs">
          <th scope="row" class="px-6 py-3 text-xs uppercase">Max Bugs</th>
          <td>{{ maxBugs }}%</td>
          <td class="text-green w-8">
            <IconCheckCircle class="text-inherit" width="16" v-if="maxBugsSatisfied" />
          </td>
        </tr>
      </table>
    </div>
    <div class="flex justify-center mt-4">
      <AppButton @click="nextLevel" :enabled="allowed">Release Game</AppButton>
    </div>
  </div>
</template>
