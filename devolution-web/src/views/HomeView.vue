<script setup lang="ts">
import GameActions from '../components/game/GameActions.vue';
import GameSidebar from '../components/game/GameSidebar.vue';
</script>

<template>
  <div class="flex gap-8 w-full">
    <div class="w-8/12 h-full"><GameActions /></div>
    <div class="w-4/12 h-full"><GameSidebar /></div>
  </div>
</template>
