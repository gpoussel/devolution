import { ref } from 'vue';
import { defineStore } from 'pinia';
import { BASIC_ACTIONS } from '@/game/design';

export const useActionStore = defineStore('action', {
  state: () => {
    const purchasedActions = ref(Object.fromEntries(BASIC_ACTIONS.map((action) => [action.id, 0])));
    return { purchasedActions };
  },
  actions: {},
});
