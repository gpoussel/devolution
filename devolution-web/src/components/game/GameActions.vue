<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';

import { BASIC_CLICK_ACTIONS, BASIC_INCOME_ACTIONS } from '@/game/design';
import { useLevelStore } from '@/stores/level';

import ClickAction from './ClickAction.vue';
import DisabledIncomeAction from './DisabledIncomeAction.vue';
import IncomeAction from './IncomeAction.vue';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

const clickActions = BASIC_CLICK_ACTIONS;

const enabledIncomeActions = computed(() => {
  return BASIC_INCOME_ACTIONS.filter((action) => level.value >= action.minLevel);
});
const disabledIncomeActionsCount = computed(() => {
  return BASIC_INCOME_ACTIONS.filter((action) => level.value < action.minLevel).length;
});
</script>

<template>
  <div class="flex flex-col gap-3 mb-4">
    <ClickAction v-for="action in clickActions" :key="action.id" :action="action" />
  </div>
  <div class="grid grid-cols-2 gap-3">
    <IncomeAction v-for="action in enabledIncomeActions" :key="action.id" :action="action" />
    <DisabledIncomeAction v-for="n in disabledIncomeActionsCount" :key="n" />
  </div>
</template>
