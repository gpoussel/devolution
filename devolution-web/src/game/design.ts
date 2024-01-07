import Decimal from 'break_infinity.js';

export interface ClickAction {
  id: string;
  name: string;
  description: string;
  minCoinsGained: Decimal;
  maxCoinsGained: Decimal;
}

export interface IncomeAction {
  id: string;
  name: string;
  description: string;
  coinsGainedPerSeconds: Decimal;
  costFactor: {
    initial: Decimal;
    factor: Decimal;
    exponent: Decimal;
  };
}

export const BASIC_CLICK_ACTIONS: ClickAction[] = [
  {
    id: 'basic-click-action-1',
    name: 'Coding',
    description: 'Start writing your first lines of code',
    minCoinsGained: Decimal.fromNumber(4),
    maxCoinsGained: Decimal.fromNumber(8),
  },
];

export const BASIC_INCOME_ACTIONS: IncomeAction[] = [
  {
    id: 'basic-income-action-1',
    name: 'Development',
    description: 'Working on existing features',
    coinsGainedPerSeconds: new Decimal(1),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(10),
      exponent: Decimal.fromNumber(1.45),
    },
  },
  {
    id: 'basic-income-action-2',
    name: 'Designing',
    description: 'Designing new features',
    coinsGainedPerSeconds: new Decimal(4),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(150),
      exponent: Decimal.fromNumber(1.35),
    },
  },
  {
    id: 'basic-income-action-3',
    name: 'Bug fixing',
    description: 'Tracking down those nasty bugs',
    coinsGainedPerSeconds: new Decimal(9),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(350),
      exponent: Decimal.fromNumber(1.4),
    },
  },
  {
    id: 'basic-income-action-4',
    name: 'Optimization',
    description: 'Improve game performances',
    coinsGainedPerSeconds: new Decimal(20),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(1750),
      exponent: Decimal.fromNumber(1.35),
    },
  },
];

export function getUpgradeCost(action: IncomeAction, targetLevel: number): Decimal {
  const { initial, factor, exponent } = action.costFactor;
  return initial.add(Decimal.pow(exponent, targetLevel - 1).times(factor)).floor();
}

export function getCoinsPerSecondIncrement(action: IncomeAction, targetLevel: number): Decimal {
  const increment = Math.floor(Math.max(0, targetLevel - 1) / 5);
  return action.coinsGainedPerSeconds.add(increment);
}
