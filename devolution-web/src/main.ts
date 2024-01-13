import './assets/css/main.css';

import { createApp } from 'vue';

import Decimal from 'break_infinity.js';
import { createPinia, storeToRefs } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import { createVCodeBlock } from '@wdns/vue-code-block';

import App from './App.vue';
import router from './router';
import { useActionStore } from './stores/action';
import { useMetricStore } from './stores/metric';
import { useTechnicalStore } from './stores/technical';
import GameLoopWorker from './worker/GameLoopWorker?worker';
import type { WorkerMessageType } from './worker/message/common';

function createStoreManager() {
  const pinia = createPinia();
  const persistedState = createPersistedState();
  pinia.use(persistedState);
  return pinia;
}

function createSyntaxHighlighting() {
  const vueCodeBlock = createVCodeBlock({
    prismjs: true,
    theme: 'tomorrow',
    codeBlockRadius: '0',
  });
  return vueCodeBlock;
}

function createApplication() {
  const app = createApp(App);
  app.use(createStoreManager());
  app.use(createSyntaxHighlighting());
  app.use(router);
  app.mount('#app');
  return app;
}

createApplication();

const metricStore = useMetricStore();
const actionStore = useActionStore();
const technicalStore = useTechnicalStore();
const { ticking } = storeToRefs(technicalStore);

function tick() {
  console.debug(`${new Date().getTime()} - tick()`);
  metricStore.tickCoins();
  metricStore.tickPopularity();
  metricStore.tickHealth();
  metricStore.tickBugs();
  const { disabledPerks } = actionStore.tickPerks();
  disabledPerks.forEach((perk) => {
    const { temporaryEffect } = perk;
    metricStore.bugsBurst -= temporaryEffect.bugsImpact ?? 0;
    metricStore.healthBurst -= temporaryEffect.healthImpact ?? 0;
    metricStore.popularityBurst -= temporaryEffect.popularityImpact ?? 0;
    metricStore.addCoinsPerSecond(
      Decimal.fromNumber(temporaryEffect.coinsPerSecond ?? 0).times(-1),
    );
  });
}

const worker = new GameLoopWorker();
worker.addEventListener('message', (messageEvent: MessageEvent): void => {
  const { data } = messageEvent;
  if (typeof data === 'object') {
    const workerMessage = data as WorkerMessageType;
    if (workerMessage.type === 'TickMessage') {
      if (ticking.value) {
        tick();
      }
    } else if (workerMessage.type === 'InitMessage') {
      console.debug('Web worker initialized');
      ticking.value = true;
    }
  }
});
