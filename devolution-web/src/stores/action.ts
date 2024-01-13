import { ref } from 'vue';

import { defineStore } from 'pinia';

import { BASIC_INCOME_ACTIONS, type IncomeAction, type Perk, PERKS } from '@/game/design';

function generateInitialIncomeActionsState() {
  return Object.fromEntries(BASIC_INCOME_ACTIONS.map((action) => [action.id, 0]));
}

function generateInitialPerkState(): { [key: string]: number } {
  return Object.fromEntries(PERKS.map((perk) => [perk.id, 0]));
}

export const useActionStore = defineStore('action', {
  state: () => {
    const purchasedActions = ref(generateInitialIncomeActionsState());
    const activePerks = ref(generateInitialPerkState());
    return { purchasedActions, activePerks };
  },
  actions: {
    activatePerk(perk: Perk) {
      this.activePerks[perk.id] = perk.duration;
    },
    increaseLevel(action: IncomeAction) {
      this.purchasedActions[action.id] += 1;
    },
    resetAfterRelease() {
      for (const action of BASIC_INCOME_ACTIONS) {
        this.purchasedActions[action.id] = 0;
      }
    },
    tickPerks() {
      for (const [key, value] of Object.entries(this.activePerks)) {
        if (value > 0) {
          this.activePerks[key]--;
        }
      }
    },
  },
  persist: true,
});
