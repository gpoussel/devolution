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
      coins: Decimal.fromNumber(12000),
      coinsPerSecond: Decimal.fromNumber(1200),
    },
  },
  {
    name: 'Large Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(19000),
      coinsPerSecond: Decimal.fromNumber(1900),
    },
  },
  {
    name: 'AAA Studio',
    releaseCondition: {
      coins: Decimal.fromNumber(25000),
      coinsPerSecond: Decimal.fromNumber(2500),
    },
  },
  {
    name: 'Game Industry Leader',
    releaseCondition: {
      coins: Decimal.fromNumber(50000),
      coinsPerSecond: Decimal.fromNumber(4000),
    },
  },
];
