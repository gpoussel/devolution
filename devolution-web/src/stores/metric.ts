import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Decimal from 'break_infinity.js';
import * as numberFormat from 'swarm-numberformat';

export const useMetricStore = defineStore('metric', {
  state: () => {
    const coins = ref(new Decimal(0)) as Ref<Decimal>;
    return { coins };
  },
  getters: {
    formattedCoins: (state) => numberFormat.formatShort(state.coins),
  },
  actions: {
    addCoins(value: Decimal) {
      this.coins = this.coins.add(value);
    },
    setCoins(value: Decimal) {
      this.coins = value;
    },
    tick() {
      // TODO: This shall obviously not be a random value
      this.addCoins(Decimal.randomDecimalForTesting(10).abs().floor());
    },
  },
  persist: {
    afterRestore(context) {
      context.store.coins = new Decimal(context.store.coins);
    },
  },
});
