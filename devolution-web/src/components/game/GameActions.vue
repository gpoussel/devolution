<script setup lang="ts">
import ClickAction from './ClickAction.vue';
import IncomeAction from './IncomeAction.vue';

import { BASIC_CLICK_ACTIONS, BASIC_INCOME_ACTIONS } from '@/game/design';

const clickActions = BASIC_CLICK_ACTIONS;
const incomeActions = BASIC_INCOME_ACTIONS;
</script>

<template>
  <div class="flex flex-col gap-3 mb-4">
    <ClickAction v-for="action in clickActions" :key="action.id" :action="action" />
  </div>
  <div class="grid grid-cols-2 gap-3">
    <IncomeAction v-for="action in incomeActions" :key="action.id" :action="action" />
  </div>
</template>
