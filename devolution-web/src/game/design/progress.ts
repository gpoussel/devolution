import Decimal from 'break_infinity.js';

export interface ProgressLevel {
  name: string;
  releaseCondition: {
    coinsPerSecond: Decimal;
    coins: Decimal;
    minPopularity: number;
    maxBugs?: number;
    minHealth?: number;
  };
}

export const PROGRESS_LEVELS: ProgressLevel[] = [
  {
    name: 'Indie developer',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
      minPopularity: 10,
    },
  },
  {
    name: 'Small Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(8000),
      coinsPerSecond: Decimal.fromNumber(800),
      minPopularity: 20,
      minHealth: 50,
    },
  },
  {
    name: 'Medium Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(15000),
      coinsPerSecond: Decimal.fromNumber(1500),
      minPopularity: 25,
      maxBugs: 200,
      minHealth: 50,
    },
  },
  {
    name: 'Large Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(25000),
      coinsPerSecond: Decimal.fromNumber(2500),
      minPopularity: 30,
      maxBugs: 300,
      minHealth: 50,
    },
  },
  {
    name: 'AAA Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(38000),
      coinsPerSecond: Decimal.fromNumber(3800),
      minPopularity: 35,
      maxBugs: 300,
      minHealth: 60,
    },
  },
  {
    name: 'Game Industry Leader',
    releaseCondition: {
      coins: Decimal.fromNumber(60000),
      coinsPerSecond: Decimal.fromNumber(6000),
      minPopularity: 40,
      maxBugs: 300,
      minHealth: 60,
    },
  },
];
