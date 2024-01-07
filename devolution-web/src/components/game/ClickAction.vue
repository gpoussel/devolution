<script setup lang="ts">
import Decimal from 'break_infinity.js';

import CoinApproximateCounter from '../utils/CoinApproximateCounter.vue';
</script>

<template>
  <div
    class="flex grow items-center col-span-1 rounded-md px-4 pt-2 pb-4 border-2 border-transparent select-none bg-black hover:cursor-pointer hover:border-white"
  >
    <div class="w-8/12">
      <p class="font-bold text-xl">Coding</p>
      <p class="text-sm">Start writing your first lines of code</p>
    </div>
    <div class="w-4/12 flex flex-row text-right">
      <div class="grow"></div>
      <img src="../../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
      <CoinApproximateCounter
        class="self-center"
        :plus="true"
        :min-value="new Decimal(4)"
        :max-value="new Decimal(8)"
      />
    </div>
  </div>
</template>
