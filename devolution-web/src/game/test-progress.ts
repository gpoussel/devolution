import Decimal from 'break_infinity.js';
import {
  BASIC_CLICK_ACTIONS,
  BASIC_INCOME_ACTIONS,
  getUpgradeCost,
  type ClickAction,
  type IncomeAction,
  getCoinsPerSecondIncrement,
} from './design';

let coinsPerSecond = Decimal.fromNumber(0);
const incomeActionLevels: { [name: string]: number } = {};

type UserOperationType =
  | { type: 'Wait'; time: number }
  | { type: 'ClickAction'; action: ClickAction }
  | {
      type: 'IncomeActionUpgrade';
      action: IncomeAction;
      currentLevels: number[];
      coinsPerSecond: Decimal;
    };

const userOperations: UserOperationType[] = [];
let iterations = 0;

BASIC_INCOME_ACTIONS.forEach((action) => (incomeActionLevels[action.id] = 0));

function getLevel(incomeAction: IncomeAction) {
  return incomeActionLevels[incomeAction.id];
}

function upgrade(action: IncomeAction) {
  if (coinsPerSecond.greaterThan(0)) {
    const time = getUpgradeCost(action, getLevel(action) + 1).divideBy(coinsPerSecond);
    if (time.greaterThan(0)) {
      userOperations.push({ type: 'Wait', time: time.toNumber() });
    }
  }
  coinsPerSecond = coinsPerSecond.add(getCoinsPerSecondIncrement(action, getLevel(action) + 1));
  incomeActionLevels[action.id]++;
  userOperations.push({
    type: 'IncomeActionUpgrade',
    action,
    currentLevels: Object.values(incomeActionLevels),
    coinsPerSecond,
  });
}

function getMostEfficientUpgrade() {
  return BASIC_INCOME_ACTIONS.map((action) => ({
    action,
    efficiency: getUpgradeCost(action, getLevel(action) + 1).divideBy(
      getCoinsPerSecondIncrement(action, getLevel(action)),
    ),
  })).reduce((r, e) => (r.efficiency.lessThanOrEqualTo(e.efficiency) ? r : e)).action;
}

while (iterations < 100) {
  if (coinsPerSecond.equals(0)) {
    // At the beginning, we need to invoke click actions
    const clickAction = BASIC_CLICK_ACTIONS[0];

    // Check the cheapest income operation
    const amountToReach = getUpgradeCost(BASIC_INCOME_ACTIONS[0], 1);
    const numberOfClickActions = amountToReach.divideBy(clickAction.minCoinsGained).ceil();
    for (let i = 0; i < numberOfClickActions.toNumber(); ++i) {
      userOperations.push({
        type: 'Wait',
        time: 10,
      });
      userOperations.push({
        type: 'ClickAction',
        action: clickAction,
      });
    }
    upgrade(BASIC_INCOME_ACTIONS[0]);
    continue;
  }
  const action = getMostEfficientUpgrade();
  upgrade(action);

  ++iterations;
}

function formatDuration(numberOfSeconds: number) {
  const hours = Math.floor(numberOfSeconds / 3600);
  const minutes = Math.floor((numberOfSeconds - hours * 3600) / 60);
  const seconds = Math.ceil(numberOfSeconds - hours * 3600 - minutes * 60);

  const hoursString = `${hours}`.padStart(2, '0');
  const minutesString = `${minutes}`.padStart(2, '0');
  const secondsString = `${seconds}`.padStart(2, '0');
  return `${hoursString}:${minutesString}:${secondsString}`;
}

let totalTime = 0;
for (const userOperation of userOperations) {
  if (userOperation.type === 'Wait') {
    totalTime += userOperation.time;
  } else if (userOperation.type === 'ClickAction') {
    console.log(`[${formatDuration(totalTime)}] Click "${userOperation.action.id}"`);
  } else if (userOperation.type === 'IncomeActionUpgrade') {
    console.log(
      `[${formatDuration(totalTime)}] ${userOperation.currentLevels
        .map((v) => `${v}`.padStart(2, ' '))
        .join(' ')}, CPS = ${userOperation.coinsPerSecond.toNumber()}`,
    );
  }
}
