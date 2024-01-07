<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { formatDecimal } from '@/utils/formatter';

defineProps<{
  minValue: Decimal;
  maxValue: Decimal;
  plus?: boolean;
}>();
</script>

<template>
  <span class="whitespace-nowrap"
    ><template v-if="plus">+&nbsp;</template>{{ formatDecimal(minValue) }}-{{
      formatDecimal(maxValue)
    }}&nbsp;&#8450;</span
  >
</template>
