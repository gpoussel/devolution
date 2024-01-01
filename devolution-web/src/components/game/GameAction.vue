<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { storeToRefs } from 'pinia';

import CoinCounter from '../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../utils/CoinPerSecondCounter.vue';

import { useActionStore } from '@/stores/action';
import { useMetricStore } from '@/stores/metric';
import { getUpgradeCost, type BasicAction } from '@/game/design';

const metricStore = useMetricStore();
const actionStore = useActionStore();
const { purchasedActions } = storeToRefs(actionStore);

const props = defineProps<{
  action: BasicAction;
}>();

// TODO: This shall no longer be used
function performAction() {
  const { action } = props;
  metricStore.addCoinsPerSecond(new Decimal(action.coinsGainedPerSeconds));
  actionStore.increaseLevel(action);
}
</script>

<template>
  <div
    class="flex items-center col-span-1 bg-black rounded-md px-4 pt-2 pb-4 border-2 border-transparent hover:border-white hover:cursor-pointer select-none"
    @click="performAction()"
  >
    <div class="w-8/12">
      <p class="font-bold text-xl" v-text="action.name"></p>
      <p class="text-sm" v-text="action.description"></p>
      <p class="mt-4">
        Current level: {{ purchasedActions[action.id] }} (<CoinPerSecondCounter
          :value="new Decimal(0)"
        />)
      </p>
      <p class="">
        Level {{ purchasedActions[action.id] + 1 }} cost:
        <CoinCounter
          :value="getUpgradeCost(action, purchasedActions[action.id] + 1)"
          class="font-bold"
        />
      </p>
    </div>
    <div class="w-4/12 flex flex-row text-right">
      <div class="grow"></div>
      <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
      <CoinPerSecondCounter
        class="self-center"
        :plus="true"
        :value="action.coinsGainedPerSeconds"
      />
    </div>
  </div>
</template>
