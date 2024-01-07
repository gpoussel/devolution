import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { PROGRESS_LEVELS } from '@/game/design';

export const useLevelStore = defineStore('level', {
  state: () => {
    const level = ref(0);
    const lastLevelReached = computed(() => {
      return level.value === PROGRESS_LEVELS.length;
    });

    return { level, lastLevelReached };
  },
  actions: {
    nextLevel() {
      this.level++;
    },
  },
  persist: true,
});
