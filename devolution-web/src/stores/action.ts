import { ref } from 'vue';
import { defineStore } from 'pinia';
import { BASIC_INCOME_ACTIONS, type BasicIncomeAction } from '@/game/design';

export const useActionStore = defineStore('action', {
  state: () => {
    const purchasedActions = ref(
      Object.fromEntries(BASIC_INCOME_ACTIONS.map((action) => [action.id, 0])),
    );
    return { purchasedActions };
  },
  actions: {
    increaseLevel(action: BasicIncomeAction) {
      this.purchasedActions[action.id] += 1;
    },
  },
  persist: true,
});
