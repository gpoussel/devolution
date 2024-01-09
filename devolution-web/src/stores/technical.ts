import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useTechnicalStore = defineStore('technical', {
  state: () => {
    const ticking = ref(false);
    return { ticking };
  },
  actions: {
    loadSave(saveContent: string) {
      this.ticking = false;
      try {
        window.localStorage.clear();
        const savedStores = JSON.parse(atob(saveContent));
        for (const [storeName, storeContentJson] of Object.entries(savedStores)) {
          window.localStorage.setItem(storeName, storeContentJson as string);
        }
        window.document.location.reload();
      } catch (_error) {
        window.alert(_error as string);
        this.ticking = true;
      }
    },
    getSaveData() {
      return btoa(JSON.stringify(localStorage));
    },
    clearSave() {
      this.ticking = false;
      window.localStorage.clear();
      window.document.location.reload();
    },
  },
});
