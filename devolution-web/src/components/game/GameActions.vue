<script setup lang="ts">
import { computed, ref } from 'vue';

import { storeToRefs } from 'pinia';

import { BASIC_CLICK_ACTIONS, BASIC_INCOME_ACTIONS, PERKS } from '@/game/design';
import { useLevelStore } from '@/stores/level';

import ClickAction from './ClickAction.vue';
import DisabledIncomeAction from './DisabledIncomeAction.vue';
import IncomeAction from './IncomeAction.vue';
import PerkAction from './PerkAction.vue';

const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);

const clickActions = BASIC_CLICK_ACTIONS;
const perkActions = PERKS;

const enabledIncomeActions = computed(() => {
  return BASIC_INCOME_ACTIONS.filter((action) => level.value >= action.minLevel);
});
const disabledIncomeActionsCount = computed(() => {
  return BASIC_INCOME_ACTIONS.filter((action) => level.value < action.minLevel).length;
});

const selectedTab = ref<'development' | 'perks'>('development');
</script>

<template>
  <div class="text-sm font-medium text-center text-white border-b border-gray-200 mb-4">
    <ul class="flex flex-wrap -mb-px">
      <li class="me-2">
        <a
          href="#"
          class="inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg"
          :class="{
            'hover:text-green-300': selectedTab !== 'development',
            'hover:border-gray-300': selectedTab !== 'development',
            'hover:border-b-4': selectedTab !== 'development',
            'border-green': selectedTab === 'development',
            'text-green': selectedTab === 'development',
            active: selectedTab === 'development',
            'border-b-4': selectedTab === 'development',
          }"
          @click="selectedTab = 'development'"
          >Development</a
        >
      </li>
      <li class="me-2">
        <a
          href="#"
          class="inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg"
          :class="{
            'hover:text-green-300': selectedTab !== 'perks',
            'hover:border-gray-300': selectedTab !== 'perks',
            'hover:border-b-4': selectedTab !== 'perks',
            'border-green': selectedTab === 'perks',
            'text-green': selectedTab === 'perks',
            active: selectedTab === 'perks',
            'border-b-4': selectedTab === 'perks',
          }"
          @click="selectedTab = 'perks'"
          >Perks</a
        >
      </li>
    </ul>
  </div>
  <div v-if="selectedTab === 'development'">
    <div class="flex flex-col gap-3 mb-4">
      <ClickAction v-for="action in clickActions" :key="action.id" :action="action" />
    </div>
    <div class="grid grid-cols-2 gap-3">
      <IncomeAction v-for="action in enabledIncomeActions" :key="action.id" :action="action" />
      <DisabledIncomeAction v-for="n in disabledIncomeActionsCount" :key="n" />
    </div>
  </div>
  <div v-if="selectedTab === 'perks'">
    <div class="flex flex-col gap-3 mb-4">
      <PerkAction v-for="perk in perkActions" :key="perk.id" :perk="perk" />
    </div>
  </div>
</template>
