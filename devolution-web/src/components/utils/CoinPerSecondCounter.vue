<script setup lang="ts">
import Decimal from 'break_infinity.js';

import { formatDecimal } from '@/utils/formatter';

import CoinSymbol from './CoinSymbol.vue';

withDefaults(
  defineProps<{
    value: Decimal;
    plus?: boolean;
  }>(),
  { plus: false },
);
</script>

<template>
  <span class="whitespace-nowrap"
    ><template v-if="plus">+&nbsp;</template>{{ formatDecimal(value) }}<CoinSymbol />/s</span
  >
</template>
