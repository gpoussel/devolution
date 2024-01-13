<script setup lang="ts">
import { computed } from 'vue';

import Decimal from 'break_infinity.js';
import { storeToRefs } from 'pinia';

import IconHourglass from '@/assets/svg/icon-hourglass.svg';
import IconTime from '@/assets/svg/icon-time.svg';
import type { Perk } from '@/game/design';
import { useActionStore } from '@/stores/action';
import { useMetricStore } from '@/stores/metric';

import CoinCounter from '../utils/CoinCounter.vue';

const metricStore = useMetricStore();
const { coins } = storeToRefs(metricStore);

const actionStore = useActionStore();
const { activePerks } = storeToRefs(actionStore);

type PerkState = 'allowed' | 'disabled' | 'active';

const props = defineProps<{
  perk: Perk;
}>();
const { perk } = props;

const state = computed<PerkState>(() => {
  if (activePerks.value[perk.id] > 0) {
    return 'active';
  }
  if (coins.value.greaterThanOrEqualTo(perk.cost)) {
    return 'allowed';
  }
  return 'disabled';
});

const remainingTime = computed(() => {
  return activePerks.value[perk.id];
});

function performAction() {
  if (state.value === 'allowed') {
    const { temporaryEffect, permanentEffect, cost } = perk;
    metricStore.removeCoins(cost);
    metricStore.bugsBurst += temporaryEffect.bugsImpact ?? 0;
    metricStore.healthBurst += temporaryEffect.healthImpact ?? 0;
    metricStore.popularityBurst += temporaryEffect.popularityImpact ?? 0;
    metricStore.addCoinsPerSecond(Decimal.fromNumber(temporaryEffect.coinsPerSecond ?? 0));
    metricStore.updatePopularity(permanentEffect.popularity ?? 0);
    metricStore.updateHealth(permanentEffect.health ?? 0);
    metricStore.updateBugs(permanentEffect.bugs ?? 0);
    actionStore.activatePerk(perk);
  }
}
</script>

<template>
  <div
    class="flex items-center col-span-1 rounded-md px-4 pt-2 pb-4 border-2 border-transparent select-none"
    :class="{
      'bg-black': state === 'allowed' || state === 'active',
      'hover:border-white': state === 'allowed',
      'border-green': state === 'active',
      'bg-gray-400': state === 'disabled',
      'hover:cursor-pointer': state === 'allowed',
      'hover:cursor-not-allowed': state === 'disabled',
      'opacity-50': state === 'disabled',
    }"
    @click="performAction()"
  >
    <div class="w-10/12">
      <p
        class="font-bold text-xl"
        :class="{
          'text-green': state === 'active',
        }"
        v-text="perk.name"
      ></p>
      <p class="text-sm" v-text="perk.description"></p>
    </div>
    <div class="w-2/12 flex flex-row text-right">
      <div class="grow"></div>
      <div class="flex flex-col items-end">
        <div class="flex flex-row">
          <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
          <CoinCounter class="self-center" :plus="true" :value="perk.cost" />
        </div>
        <div class="flex flex-row" v-if="state === 'allowed' || state === 'disabled'">
          <IconTime width="14" />&nbsp;{{ perk.duration }}s
        </div>
        <div class="flex flex-row text-green" v-if="state === 'active'">
          <IconHourglass width="10" />&nbsp;{{ remainingTime }}s
        </div>
      </div>
    </div>
  </div>
</template>
