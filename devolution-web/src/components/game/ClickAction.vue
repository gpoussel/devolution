<script setup lang="ts">
import { ref } from 'vue';

import Decimal from 'break_infinity.js';

import ClickActionModal from '@/components/modal/ClickActionModal.vue';
import type { ClickAction } from '@/game/design';
import { useMetricStore } from '@/stores/metric';
import { randomIntegerInRange } from '@/utils/random';

import CoinApproximateCounter from '../utils/CoinApproximateCounter.vue';

const props = defineProps<{
  action: ClickAction;
}>();
const action = props.action;

const modalDisplayed = ref(false);

const metricStore = useMetricStore();

function getRandomCoins() {
  const minCoinsGained = action.minCoinsGained.toNumber();
  const maxCoinsGained = action.maxCoinsGained.toNumber();
  return randomIntegerInRange(minCoinsGained, maxCoinsGained);
}

function startAction() {
  modalDisplayed.value = true;
}

function completeAction() {
  metricStore.addCoins(Decimal.fromNumber(getRandomCoins()));
  modalDisplayed.value = false;
}
</script>

<template>
  <div
    class="flex grow items-center col-span-1 rounded-md px-4 pt-2 pb-4 border-2 border-transparent select-none bg-black hover:cursor-pointer hover:border-white"
    @click="startAction"
  >
    <div class="w-8/12">
      <p class="font-bold text-xl" v-text="action.name"></p>
      <p class="text-sm" v-text="action.description"></p>
    </div>
    <div class="w-4/12 flex flex-row text-right">
      <div class="grow"></div>
      <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
      <CoinApproximateCounter
        class="self-center"
        :plus="true"
        :min-value="action.minCoinsGained"
        :max-value="action.maxCoinsGained"
      />
    </div>
  </div>
  <ClickActionModal
    v-if="modalDisplayed"
    v-model.visible="modalDisplayed"
    :action="action"
    @done="completeAction"
  />
</template>
