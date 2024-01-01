import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Decimal from 'break_infinity.js';
import * as numberFormat from 'swarm-numberformat';

export const useMetricStore = defineStore('metric', {
  state: () => {
    const coins = ref(new Decimal(0)) as Ref<Decimal>;
    const coinsPerSecond = ref(new Decimal(0)) as Ref<Decimal>;
    return { coins, coinsPerSecond };
  },
  getters: {
    formattedCoinsPerSecond: (state) => numberFormat.formatShort(state.coinsPerSecond),
  },
  actions: {
    addCoins(value: Decimal) {
      this.coins = this.coins.add(value);
    },
    setCoins(value: Decimal) {
      this.coins = value;
    },
    addCoinsPerSecond(value: Decimal) {
      this.coinsPerSecond = this.coinsPerSecond.add(value);
    },
    setCoinsPerSecond(value: Decimal) {
      this.coinsPerSecond = value;
    },
    tick() {
      this.addCoins(this.coinsPerSecond);
    },
  },
  persist: {
    afterRestore(context) {
      context.store.coins = new Decimal(context.store.coins);
      context.store.coinsPerSecond = new Decimal(context.store.coinsPerSecond);
    },
  },
});
