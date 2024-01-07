import Decimal from 'break_infinity.js';

export interface ClickAction {
  id: string;
  name: string;
  description: string;
  minCoinsGained: Decimal;
  maxCoinsGained: Decimal;
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
