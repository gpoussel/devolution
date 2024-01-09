<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { storeToRefs } from 'pinia';

import { type NumberFormatType, usePreferenceStore } from '@/stores/preference';
import { formatDecimalWithFormat } from '@/utils/formatter';

const preferenceStore = usePreferenceStore();
const { numberFormat } = storeToRefs(preferenceStore);

const numberAsActualNumber = 123_456_789_000;
const numberAsString = new Intl.NumberFormat().format(numberAsActualNumber);
const number = Decimal.fromNumber(numberAsActualNumber);
const short = formatDecimalWithFormat(number, 'short');
const shortLongScale = formatDecimalWithFormat(number, 'shortLongScale');
const scientific = formatDecimalWithFormat(number, 'scientific');
const engineering = formatDecimalWithFormat(number, 'engineering');

const numberFormatChoices: { name: NumberFormatType; example: string }[] = [
  { name: 'short', example: short },
  { name: 'shortLongScale', example: shortLongScale },
  { name: 'scientific', example: scientific },
  { name: 'engineering', example: engineering },
];
</script>

<template>
  <div class="w-1/2">
    <h2 class="text-lg font-semibold">Preferences</h2>
    <p class="text-sm">This section allows you to customize your game experience.</p>
    <div class="flex flex-row items-start mt-4">
      <fieldset class="flex flex-col">
        <legend class="font-semibold">Number format</legend>
        <p class="text-sm">Example with {{ numberAsString }}</p>
        <div class="flex flex-wrap gap-3 mt-2">
          <div v-for="numberFormatChoice of numberFormatChoices" :key="numberFormatChoice.name">
            <input
              type="radio"
              name="numberFormat"
              :value="numberFormatChoice.name"
              :id="'numberFormat' + numberFormatChoice.name"
              class="peer hidden"
              v-model="numberFormat"
            />
            <label
              :for="'numberFormat' + numberFormatChoice.name"
              class="flex cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-white px-4 py-2 text-gray-800 hover:border-gray-400 hover:bg-gray-300 peer-checked:border-gray-400 peer-checked:bg-black peer-checked:text-white"
            >
              <p class="text-sm font-medium">{{ numberFormatChoice.example }}</p>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
