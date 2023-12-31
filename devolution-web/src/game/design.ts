export interface BasicAction {
  name: string;
  description: string;
  coinsGainedPerSeconds: number;
}

export const BASIC_ACTIONS = [
  {
    id: '87134f33-0869-57cc-8bc8-b80688f2ff7f',
    name: 'Development',
    description: 'Keep developing existing features',
    coinsGainedPerSeconds: 1,
  },
  {
    id: '0253ea89-2004-5efb-bbda-07b13000a094',
    name: 'Designing',
    description: 'Designing new features',
    coinsGainedPerSeconds: 2,
  },
  {
    id: '8a4fd21b-a724-5a28-a9c8-39aced8c09ad',
    name: 'Bug fixing',
    description: 'Tracking down those nasty bugs',
    coinsGainedPerSeconds: 4,
  },
  {
    id: 'c926ba89-0eb3-5b37-bc55-8d1c87214ae3',
    name: 'Optimization',
    description: 'Improve game performances',
    coinsGainedPerSeconds: 8,
  },
];
