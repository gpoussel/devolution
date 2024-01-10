<script setup lang="ts">
import Decimal from 'break_infinity.js';

import IconLock from '@/assets/svg/icon-lock.svg';

import CoinCounter from '../utils/CoinCounter.vue';
import CoinPerSecondCounter from '../utils/CoinPerSecondCounter.vue';

const coinsPerSecondIncrement = Decimal.fromNumber(15);
const cost = Decimal.fromNumber(123);
</script>

<template>
  <div class="relative">
    <div
      class="flex items-center col-span-1 rounded-md px-4 pt-2 pb-4 border-2 border-transparent select-none bg-gray-400 opacity-50"
    >
      <div class="w-8/12 blur-sm">
        <p class="font-bold text-xl">Income Action</p>
        <p class="text-sm">This is the description</p>
        <p class="mt-4">Current level: 0</p>
        <p class="">
          Level 1 cost:
          <CoinCounter :value="cost" class="font-bold" />
        </p>
      </div>
      <div class="w-4/12 flex flex-row text-right blur-sm">
        <div class="grow"></div>
        <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
        <CoinPerSecondCounter class="self-center" :plus="true" :value="coinsPerSecondIncrement" />
      </div>
    </div>
    <div class="absolute top-6 left-0 w-full text-center flex-col items-center self-center">
      <span class="text-center"><IconLock class="m-auto w-8 h-8 text-inherit" /></span>
      <p class="font-semibold">Unavailable</p>
      <p class="text-sm mt-2">This action will be unlocked later</p>
    </div>
  </div>
</template>
