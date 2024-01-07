import Decimal from 'break_infinity.js';

export interface ProgressLevel {
  name: string;
  releaseCondition: {
    coinsPerSecond: Decimal;
    coins: Decimal;
  };
  multiplier: Decimal;
}

export const PROGRESS_LEVELS: ProgressLevel[] = [
  {
    name: 'Indie developer',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
  {
    name: 'Small Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
  {
    name: 'Medium Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
  {
    name: 'Large Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
  {
    name: 'AAA Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
  {
    name: 'Game Industry Leader',
    releaseCondition: {
      coins: Decimal.fromNumber(3000),
      coinsPerSecond: Decimal.fromNumber(300),
    },
    multiplier: Decimal.fromNumber(1),
  },
];
