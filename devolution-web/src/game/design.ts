import Decimal from 'break_infinity.js';

export interface BasicAction {
  name: string;
  description: string;
  coinsGainedPerSeconds: number;
  costFactor: {
    initial: Decimal;
    factor: Decimal;
    exponent: Decimal;
  };
}

export const BASIC_ACTIONS = [
  {
    id: 'basic-action-1',
    name: 'Development',
    description: 'Working on existing features',
    coinsGainedPerSeconds: 1,
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(10),
      exponent: Decimal.fromNumber(2.05),
    },
  },
  {
    id: 'basic-action-2',
    name: 'Designing',
    description: 'Designing new features',
    coinsGainedPerSeconds: 2,
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(500),
      exponent: Decimal.fromNumber(1.85),
    },
  },
  {
    id: 'basic-action-3',
    name: 'Bug fixing',
    description: 'Tracking down those nasty bugs',
    coinsGainedPerSeconds: 4,
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(11000),
      exponent: Decimal.fromNumber(1.75),
    },
  },
  {
    id: 'basic-action-4',
    name: 'Optimization',
    description: 'Improve game performances',
    coinsGainedPerSeconds: 8,
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(200000),
      exponent: Decimal.fromNumber(1.65),
    },
  },
];

export function getUpgradeCost(basicAction: BasicAction, targetLevel: number): Decimal {
  const { initial, factor, exponent } = basicAction.costFactor;
  return initial.add(Decimal.pow(exponent, targetLevel - 1).times(factor));
}
