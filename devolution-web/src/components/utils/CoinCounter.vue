<script setup lang="ts">
import Decimal from 'break_infinity.js';

import { formatDecimal } from '@/utils/formatter';

import CoinSymbol from './CoinSymbol.vue';

defineProps<{
  value: Decimal;
}>();
</script>

<template>
  <span class="whitespace-nowrap">{{ formatDecimal(value) }}<CoinSymbol /></span>
</template>
