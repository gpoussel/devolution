import { ref } from 'vue';

import { defineStore } from 'pinia';

export type NumberFormatType = 'short' | 'shortLongScale' | 'scientific' | 'engineering';

export const usePreferenceStore = defineStore('preference', {
  state: () => {
    const numberFormat = ref<NumberFormatType>('short');
    return { numberFormat };
  },
  persist: true,
});
