import { ref } from 'vue';

import { defineStore } from 'pinia';

import { BASIC_INCOME_ACTIONS, type IncomeAction } from '@/game/design';

function generateInitialState() {
  return Object.fromEntries(BASIC_INCOME_ACTIONS.map((action) => [action.id, 0]));
}

export const useActionStore = defineStore('action', {
  state: () => {
    const purchasedActions = ref(generateInitialState());
    return { purchasedActions };
  },
  actions: {
    increaseLevel(action: IncomeAction) {
      this.purchasedActions[action.id] += 1;
    },
    resetAfterRelease() {
      for (const action of BASIC_INCOME_ACTIONS) {
        this.purchasedActions[action.id] = 0;
      }
    },
  },
  persist: true,
});
