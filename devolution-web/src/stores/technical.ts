import { ref } from 'vue';

import { defineStore } from 'pinia';

import router from '@/router';

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
        this.reloadAndBackToHome();
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
      this.reloadAndBackToHome();
    },
    reloadAndBackToHome() {
      const basePath = router.options.history.base;
      window.document.location.assign(basePath + (basePath.endsWith('/') ? '' : '/'));
      window.document.location.reload();
    },
  },
});
