<script setup lang="ts">
import ClickAction from './ClickAction.vue';
import GameAction from './GameAction.vue';

import { BASIC_INCOME_ACTIONS } from '@/game/design';

const actions = BASIC_INCOME_ACTIONS;
</script>

<template>
  <div class="flex mb-4">
    <ClickAction />
  </div>
  <div class="grid grid-cols-2 gap-3">
    <GameAction v-for="action in actions" :key="action.id" :action="action" />
  </div>
</template>
