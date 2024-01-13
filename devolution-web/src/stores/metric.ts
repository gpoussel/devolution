import { ref, type Ref } from 'vue';

import Decimal from 'break_infinity.js';
import { defineStore } from 'pinia';

import { clamp } from '@/utils/number';
import { randomIntegerInRange } from '@/utils/random';

function computeIncrement(increasingChances: number, decreasingChances: number): number {
  const increasingNumber = randomIntegerInRange(0, 500);
  const decreasingNumber = randomIntegerInRange(0, 500);

  return (
    (increasingNumber < increasingChances ? 1 : 0) - (decreasingNumber < decreasingChances ? 1 : 0)
  );
}

export const useMetricStore = defineStore('metric', {
  state: () => {
    const coins = ref(new Decimal(0)) as Ref<Decimal>;
    const coinsPerSecond = ref(new Decimal(0)) as Ref<Decimal>;
    const popularity = ref(0);
    const chancesOfIncreasingPopularity = ref(0);
    const chancesOfDecreasingPopularity = ref(0);
    const health = ref(50);
    const chancesOfIncreasingHealth = ref(0);
    const chancesOfDecreasingHealth = ref(0);
    const bugs = ref(0);
    const chancesOfIncreasingBugs = ref(0);
    const chancesOfDecreasingBugs = ref(0);
    return {
      coins,
      coinsPerSecond,
      popularity,
      health,
      bugs,
      chancesOfIncreasingPopularity,
      chancesOfDecreasingPopularity,
      chancesOfIncreasingHealth,
      chancesOfDecreasingHealth,
      chancesOfIncreasingBugs,
      chancesOfDecreasingBugs,
    };
  },
  actions: {
    addCoins(value: Decimal) {
      this.coins = this.coins.add(value);
    },
    removeCoins(value: Decimal) {
      this.coins = this.coins.subtract(value);
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
    tickCoins() {
      this.addCoins(this.coinsPerSecond);
    },
    tickPopularity() {
      const newPopularity =
        this.popularity +
        computeIncrement(this.chancesOfIncreasingPopularity, this.chancesOfDecreasingPopularity);
      this.popularity = clamp(newPopularity, 0, 100);
    },
    addImpactOnPopularity(impact: number) {
      if (impact > 0) {
        this.chancesOfIncreasingPopularity = clamp(
          this.chancesOfIncreasingPopularity + impact,
          0,
          100,
        );
      } else {
        this.chancesOfDecreasingPopularity = clamp(
          this.chancesOfDecreasingPopularity + impact,
          0,
          100,
        );
      }
    },
    tickHealth() {
      const newHealth =
        this.health +
        computeIncrement(this.chancesOfIncreasingHealth, this.chancesOfDecreasingHealth);
      this.health = clamp(newHealth, 0, 100);
    },
    addImpactOnHealth(impact: number) {
      if (impact > 0) {
        this.chancesOfIncreasingHealth = clamp(this.chancesOfIncreasingHealth + impact, 0, 100);
      } else {
        this.chancesOfDecreasingHealth = clamp(this.chancesOfDecreasingHealth - impact, 0, 100);
      }
    },
    tickBugs() {
      const newBugs =
        this.bugs + computeIncrement(this.chancesOfIncreasingBugs, this.chancesOfDecreasingBugs);
      this.bugs = clamp(newBugs, 0, 1000);
    },
    addImpactOnBugs(impact: number) {
      if (impact > 0) {
        this.chancesOfIncreasingBugs = clamp(this.chancesOfIncreasingBugs + impact, 0, 100);
      } else {
        this.chancesOfDecreasingBugs = clamp(this.chancesOfDecreasingBugs - impact, 0, 100);
      }
    },
    resetAfterRelease() {
      this.coinsPerSecond = Decimal.fromNumber(0);
    },
  },
  persist: {
    afterRestore(context) {
      context.store.coins = new Decimal(context.store.coins);
      context.store.coinsPerSecond = new Decimal(context.store.coinsPerSecond);
    },
  },
});
