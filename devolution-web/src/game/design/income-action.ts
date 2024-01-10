import Decimal from 'break_infinity.js';

export interface IncomeAction {
  id: string;
  name: string;
  description: string;
  coinsGainedPerSeconds: Decimal;
  minLevel: number;
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
    minLevel: 0,
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
    minLevel: 0,
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
    minLevel: 0,
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
    minLevel: 0,
    coinsGainedPerSeconds: new Decimal(20),
    costFactor: {
      initial: Decimal.fromNumber(0),
      factor: Decimal.fromNumber(1750),
      exponent: Decimal.fromNumber(1.35),
    },
  },
  {
    id: 'basic-income-action-5',
    name: 'Marketing',
    description: 'Promoting the game to potential customers',
    minLevel: 1,
    coinsGainedPerSeconds: new Decimal(30),
    costFactor: {
      initial: Decimal.fromNumber(1750),
      factor: Decimal.fromNumber(5000),
      exponent: Decimal.fromNumber(1.5),
    },
  },
  {
    id: 'basic-income-action-6',
    name: 'Testing',
    description: 'Testing the game for bugs and errors',
    minLevel: 2,
    coinsGainedPerSeconds: new Decimal(42),
    costFactor: {
      initial: Decimal.fromNumber(2650),
      factor: Decimal.fromNumber(6700),
      exponent: Decimal.fromNumber(1.5),
    },
  },
  {
    id: 'basic-income-action-7',
    name: 'Polishing',
    description: 'Adding visual and audio effects to the game',
    minLevel: 3,
    coinsGainedPerSeconds: new Decimal(60),
    costFactor: {
      initial: Decimal.fromNumber(2250),
      factor: Decimal.fromNumber(8250),
      exponent: Decimal.fromNumber(1.6),
    },
  },
  {
    id: 'basic-income-action-8',
    name: 'Hiring',
    description: 'Hiring other developers to join the team',
    minLevel: 4,
    coinsGainedPerSeconds: new Decimal(75),
    costFactor: {
      initial: Decimal.fromNumber(3150),
      factor: Decimal.fromNumber(12150),
      exponent: Decimal.fromNumber(1.7),
    },
  },
  {
    id: 'basic-income-action-9',
    name: 'Monetizing',
    description: 'Adding in-app purchases and ads to the game',
    minLevel: 5,
    coinsGainedPerSeconds: new Decimal(90),
    costFactor: {
      initial: Decimal.fromNumber(4250),
      factor: Decimal.fromNumber(14200),
      exponent: Decimal.fromNumber(1.7),
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
