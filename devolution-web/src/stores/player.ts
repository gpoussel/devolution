import { ref } from 'vue';

import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => {
    const welcomeModalDisplayed = ref(true);
    return { welcomeModalDisplayed };
  },
  actions: {},
  persist: true,
});
