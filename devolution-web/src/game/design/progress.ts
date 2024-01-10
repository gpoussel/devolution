import Decimal from 'break_infinity.js';

export interface ProgressLevel {
  name: string;
  releaseCondition: {
    coinsPerSecond: Decimal;
    coins: Decimal;
  };
}

export const PROGRESS_LEVELS: ProgressLevel[] = [
  {
    name: 'Indie developer',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
  },
  {
    name: 'Small Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(8000),
      coinsPerSecond: Decimal.fromNumber(800),
    },
  },
  {
    name: 'Medium Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(15000),
      coinsPerSecond: Decimal.fromNumber(1500),
    },
  },
  {
    name: 'Large Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(25000),
      coinsPerSecond: Decimal.fromNumber(2500),
    },
  },
  {
    name: 'AAA Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(38000),
      coinsPerSecond: Decimal.fromNumber(3800),
    },
  },
  {
    name: 'Game Industry Leader',
    releaseCondition: {
      coins: Decimal.fromNumber(60000),
      coinsPerSecond: Decimal.fromNumber(6000),
    },
  },
];
