import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLevelStore = defineStore('level', {
  state: () => {
    const level = ref(0);
    return { level };
  },
  actions: {
    nextLevel() {
      this.level++;
    },
  },
  persist: true,
});
