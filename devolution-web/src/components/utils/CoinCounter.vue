<script setup lang="ts">
import Decimal from 'break_infinity.js';
import { formatDecimal } from '@/utils/formatter';

defineProps<{
  value: Decimal;
}>();
</script>

<template>
  <span>{{ formatDecimal(value) }}&nbsp;&#8450;</span>
</template>
