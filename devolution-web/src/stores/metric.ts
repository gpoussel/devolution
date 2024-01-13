import { ref, type Ref } from 'vue';

import Decimal from 'break_infinity.js';
import { defineStore } from 'pinia';

import { clamp } from '@/utils/number';
import { randomIntegerInRange } from '@/utils/random';

const HEALTH_ODDS = 1500;
const POPULARITY_ODDS = 1000;
const BUGS_ODDS = 500;

function computeIncrement(
  increasingChances: number,
  decreasingChances: number,
  burst: number,
  odds: number,
): number {
  const positiveBurst = Math.max(0, burst);
  const negativeBurst = Math.min(0, burst);

  const increasingNumber = randomIntegerInRange(0, odds) - positiveBurst;
  const decreasingNumber = randomIntegerInRange(0, odds) + negativeBurst;

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
    const popularityBurst = ref(0);
    const health = ref(50);
    const chancesOfIncreasingHealth = ref(0);
    const chancesOfDecreasingHealth = ref(0);
    const healthBurst = ref(0);
    const bugs = ref(0);
    const chancesOfIncreasingBugs = ref(0);
    const chancesOfDecreasingBugs = ref(0);
    const bugsBurst = ref(0);
    return {
      coins,
      coinsPerSecond,
      popularity,
      health,
      bugs,
      chancesOfIncreasingPopularity,
      chancesOfDecreasingPopularity,
      popularityBurst,
      chancesOfIncreasingHealth,
      chancesOfDecreasingHealth,
      healthBurst,
      chancesOfIncreasingBugs,
      chancesOfDecreasingBugs,
      bugsBurst,
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
        computeIncrement(
          this.chancesOfIncreasingPopularity,
          this.chancesOfDecreasingPopularity,
          this.popularityBurst,
          POPULARITY_ODDS,
        );
      this.popularity = clamp(newPopularity, 0, 100);
    },
    updatePopularity(change: number) {
      this.popularity = clamp(this.popularity + change, 0, 100);
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
        computeIncrement(
          this.chancesOfIncreasingHealth,
          this.chancesOfDecreasingHealth,
          this.healthBurst,
          HEALTH_ODDS,
        );
      this.health = clamp(newHealth, 0, 100);
    },
    updateHealth(change: number) {
      this.health = clamp(this.health + change, 0, 100);
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
        this.bugs +
        computeIncrement(
          this.chancesOfIncreasingBugs,
          this.chancesOfDecreasingBugs,
          this.bugsBurst,
          BUGS_ODDS,
        );
      this.bugs = clamp(newBugs, 0, 1000);
    },
    updateBugs(change: number) {
      this.bugs += change;
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
