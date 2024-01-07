<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import CoinCounter from '../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../utils/CoinPerSecondCounter.vue';

import { useActionStore } from '@/stores/action';
import { useMetricStore } from '@/stores/metric';
import { getCoinsPerSecondIncrement, getUpgradeCost, type IncomeAction } from '@/game/design';

const metricStore = useMetricStore();
const { coins } = storeToRefs(metricStore);
const actionStore = useActionStore();
const { purchasedActions } = storeToRefs(actionStore);

const props = defineProps<{
  action: IncomeAction;
}>();
const action = props.action;
const { id } = action;

const targetLevel = computed(() => {
  return purchasedActions.value[id] + 1;
});

const coinsPerSecondIncrement = computed(() => {
  return getCoinsPerSecondIncrement(action, targetLevel.value);
});

const cost = computed(() => {
  return getUpgradeCost(action, targetLevel.value);
});

const allowed = computed(() => {
  return cost.value.lessThanOrEqualTo(coins.value);
});

function performAction() {
  if (allowed.value) {
    metricStore.addCoinsPerSecond(coinsPerSecondIncrement.value);
    metricStore.removeCoins(cost.value);
    actionStore.increaseLevel(action);
  }
}
</script>

<template>
  <div
    class="flex items-center col-span-1 rounded-md px-4 pt-2 pb-4 border-2 border-transparent select-none"
    :class="{
      'bg-black': allowed,
      'hover:cursor-pointer': allowed,
      'hover:border-white': allowed,
      'bg-gray-400': !allowed,
      'hover:cursor-not-allowed': !allowed,
      'opacity-50': !allowed,
    }"
    @click="performAction()"
  >
    <div class="w-8/12">
      <p class="font-bold text-xl" v-text="action.name"></p>
      <p class="text-sm" v-text="action.description"></p>
      <p class="mt-4">Current level: {{ purchasedActions[id] }}</p>
      <p class="">
        Level {{ purchasedActions[id] + 1 }} cost:
        <CoinCounter :value="cost" class="font-bold" />
      </p>
    </div>
    <div class="w-4/12 flex flex-row text-right">
      <div class="grow"></div>
      <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
      <CoinPerSecondCounter class="self-center" :plus="true" :value="coinsPerSecondIncrement" />
    </div>
  </div>
</template>
