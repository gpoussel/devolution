import Decimal from 'break_infinity.js';

export interface Perk {
  id: string;
  name: string;
  description: string;
  cost: Decimal;
  duration: number;
  temporaryEffect: {
    coinsPerSecond?: number;
    healthImpact?: number;
    bugsImpact?: number;
    popularityImpact?: number;
  };
  permanentEffect: {
    popularity?: number;
    health?: number;
    bugs?: number;
  };
}

export const PERKS: Perk[] = [
  {
    id: 'perk-1',
    name: 'Coffee Break',
    description:
      'Boosts your productivity and income for a short time, but lowers your health slightly.',
    cost: Decimal.fromNumber(1000),
    duration: 15,
    temporaryEffect: {
      coinsPerSecond: 3,
    },
    permanentEffect: {
      health: -3,
    },
  },
  {
    id: 'perk-2',
    name: 'Marketing Campaign',
    description:
      'Increases your popularity and income for a short time, but costs some coins and increases the chance of bugs.',
    cost: Decimal.fromNumber(5000),
    duration: 50,
    temporaryEffect: {
      coinsPerSecond: 3,
      bugsImpact: 50,
    },
    permanentEffect: {
      popularity: 10,
      health: -3,
    },
  },
  {
    id: 'perk-3',
    name: 'Game Jam',
    description:
      'Participate in a game jam to create a mini-game that boosts your popularity and income, but lowers your health and increases the chance of bugs.',
    cost: Decimal.fromNumber(1000),
    duration: 120,
    temporaryEffect: {
      coinsPerSecond: 2,
      popularityImpact: 50,
      bugsImpact: 50,
    },
    permanentEffect: {
      popularity: 10,
      health: -3,
    },
  },
  {
    id: 'perk-4',
    name: 'Crunch Time',
    description:
      'Work overtime to increase your income and popularity, but lower your health and increase the chance of bugs.',
    cost: Decimal.fromNumber(500),
    duration: 30,
    temporaryEffect: {
      coinsPerSecond: 5,
      healthImpact: -50,
      bugsImpact: 30,
    },
    permanentEffect: {
      popularity: 10,
      health: -2,
    },
  },
  {
    id: 'perk-5',
    name: 'Feedback Session',
    description:
      "Get feedback from your peers or testers, but risk losing popularity if they don't like your game.",
    cost: Decimal.fromNumber(2000),
    duration: 60,
    temporaryEffect: {
      popularityImpact: -20,
      bugsImpact: -50,
    },
    permanentEffect: {
      bugs: -10,
    },
  },
  {
    id: 'perk-6',
    name: 'Relaxation Therapy',
    description:
      'Reduce your stress and restore your health, but cost some coins and lower your income slightly.',
    cost: Decimal.fromNumber(1000),
    duration: 30,
    temporaryEffect: {
      coinsPerSecond: -10,
      healthImpact: 100,
    },
    permanentEffect: {},
  },
  {
    id: 'perk-7',
    name: 'Bug Bounty',
    description:
      'Offer a reward to anyone who can find and report bugs in your game, but cost some coins and lower your income slightly.',
    cost: Decimal.fromNumber(10000),
    duration: 300,
    temporaryEffect: {
      coinsPerSecond: -5,
      bugsImpact: -200,
    },
    permanentEffect: {},
  },
];
