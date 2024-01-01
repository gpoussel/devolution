<script setup lang="ts">
import GameAction from './GameAction.vue';

import { BASIC_ACTIONS } from '@/game/design';

const actions = BASIC_ACTIONS;
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <GameAction v-for="action in actions" :key="action.id" :action="action" />
  </div>
</template>
