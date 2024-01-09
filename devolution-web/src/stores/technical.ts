import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useTechnicalStore = defineStore('technical', {
  state: () => {
    const ticking = ref(false);
    return { ticking };
  },
  actions: {
    clearSave() {
      this.ticking = false;
      window.localStorage.clear();
      window.document.location.reload();
    },
  },
});
