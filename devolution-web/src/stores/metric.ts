import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useMetricStore = defineStore('metric', {
  state: () => {
    const coins = ref(0);
    const formattedCoins = computed(() => {
      return `${coins.value}\u00a0\u2102`;
    });
    return { coins, formattedCoins };
  },
  actions: {
    addCoins(value: number) {
      this.coins += value;
    },
  },
});