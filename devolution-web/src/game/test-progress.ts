import Decimal from 'break_infinity.js';

import {
  BASIC_CLICK_ACTIONS,
  BASIC_INCOME_ACTIONS,
  type ClickAction,
  getCoinsPerSecondIncrement,
  getUpgradeCost,
  type IncomeAction,
  PROGRESS_LEVELS,
} from './design';

type UserOperationType =
  | { type: 'Wait'; time: number }
  | { type: 'Release'; level: number }
  | { type: 'ClickAction'; action: ClickAction }
  | {
      type: 'IncomeActionUpgrade';
      action: IncomeAction;
      currentLevels: number[];
      coinsPerSecond: Decimal;
    };

function getUserOperationsAtLevel(progressLevel: number) {
  const userOperations: UserOperationType[] = [];
  let coinsPerSecond = Decimal.fromNumber(0);
  const incomeActionLevels: { [name: string]: number } = {};
  BASIC_INCOME_ACTIONS.forEach((action) => (incomeActionLevels[action.id] = 0));

  function getLevel(incomeAction: IncomeAction) {
    return incomeActionLevels[incomeAction.id];
  }

  function upgrade(action: IncomeAction) {
    if (coinsPerSecond.greaterThan(0)) {
      const time = getUpgradeCost(action, getLevel(action) + 1, progressLevel).divideBy(
        coinsPerSecond,
      );
      if (time.greaterThan(0)) {
        userOperations.push({ type: 'Wait', time: time.toNumber() });
      }
    }
    coinsPerSecond = coinsPerSecond.add(
      getCoinsPerSecondIncrement(action, getLevel(action) + 1, progressLevel),
    );
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
      efficiency: getUpgradeCost(action, getLevel(action) + 1, progressLevel).divideBy(
        getCoinsPerSecondIncrement(action, getLevel(action), progressLevel),
      ),
    })).reduce((r, e) => (r.efficiency.lessThanOrEqualTo(e.efficiency) ? r : e)).action;
  }

  let iterations = 0;
  while (iterations < 100) {
    if (coinsPerSecond.equals(0)) {
      // At the beginning, we need to invoke click actions
      const clickAction = BASIC_CLICK_ACTIONS[0];

      // Check the cheapest income operation
      const amountToReach = getUpgradeCost(BASIC_INCOME_ACTIONS[0], 1, progressLevel);
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

    const currentProgressLevel = PROGRESS_LEVELS[progressLevel];
    if (coinsPerSecond.greaterThanOrEqualTo(currentProgressLevel.releaseCondition.coinsPerSecond)) {
      const timeToGainCoins = currentProgressLevel.releaseCondition.coins.divideBy(coinsPerSecond);
      userOperations.push({
        type: 'Wait',
        time: timeToGainCoins.toNumber(),
      });
      userOperations.push({
        type: 'Release',
        level: progressLevel,
      });
      break;
    }

    ++iterations;
  }
  return userOperations;
}

function formatDuration(rawNumberOfSeconds: number) {
  const numberOfSeconds = Math.ceil(rawNumberOfSeconds);
  const hours = Math.floor(numberOfSeconds / 3600);
  const minutes = Math.floor((numberOfSeconds - hours * 3600) / 60);
  const seconds = Math.ceil(numberOfSeconds - hours * 3600 - minutes * 60);

  const hoursString = `${hours}`.padStart(2, '0');
  const minutesString = `${minutes}`.padStart(2, '0');
  const secondsString = `${seconds}`.padStart(2, '0');
  return `${hoursString}:${minutesString}:${secondsString}`;
}

for (let level = 0; level < PROGRESS_LEVELS.length; ++level) {
  let totalTime = 0;
  let lastIncomeAction: string = '';
  let lastReleaseAction: string = '';
  for (const userOperation of getUserOperationsAtLevel(level)) {
    if (userOperation.type === 'Wait') {
      totalTime += userOperation.time;
    } else if (userOperation.type === 'IncomeActionUpgrade') {
      lastIncomeAction = `[${formatDuration(totalTime)}] ${userOperation.currentLevels
        .map((v) => `${v}`.padStart(2, ' '))
        .join(' ')}, CPS = ${userOperation.coinsPerSecond.toNumber()}`;
    } else if (userOperation.type === 'Release') {
      lastReleaseAction = `[${formatDuration(totalTime)}] Release (level = ${userOperation.level})`;
    }
  }
  console.log(`Simulation at level ${level} (${PROGRESS_LEVELS[level].name}):`);
  console.log(lastIncomeAction);
  console.log(lastReleaseAction);
  console.log();
}
