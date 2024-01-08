import Decimal from 'break_infinity.js';

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

export const BASIC_INCOME_ACTIONS: IncomeAction[] = [
  {
    id: 'basic-income-action-1',
    name: 'Coding',
    description: 'Writing code for the game',
    coinsGainedPerSeconds: new Decimal(1),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(10),
      exponent: Decimal.fromNumber(1.45),
    },
  },
  {
    id: 'basic-income-action-2',
    name: 'Researching',
    description: 'Learning new technologies and techniques',
    coinsGainedPerSeconds: new Decimal(4),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(150),
      exponent: Decimal.fromNumber(1.35),
    },
  },
  {
    id: 'basic-income-action-3',
    name: 'Debugging',
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
    name: 'Optimizing',
    description: 'Improving game performance and compatibility',
    coinsGainedPerSeconds: new Decimal(20),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(1750),
      exponent: Decimal.fromNumber(1.35),
    },
  },
];

export function getUpgradeCost(
  action: IncomeAction,
  targetActionLevel: number,
  progressLevel: number,
): Decimal {
  const { initial, factor, exponent } = action.costFactor;
  return initial
    .add(
      Decimal.pow(
        exponent.add(Decimal.fromNumber(progressLevel * 0.1)),
        targetActionLevel - 1,
      ).times(factor),
    )
    .floor();
}

export function getCoinsPerSecondIncrement(
  action: IncomeAction,
  targetLevel: number,
  progressLevel: number,
): Decimal {
  const firstLevelIncrement = Math.floor(Math.max(0, targetLevel - 1) / 5);
  const nextLevelIncrement = Math.pow(progressLevel + firstLevelIncrement, 2) * 1.5;
  const progressLevelIncrement = progressLevel === 0 ? firstLevelIncrement : nextLevelIncrement;
  return action.coinsGainedPerSeconds.add(progressLevelIncrement);
}
