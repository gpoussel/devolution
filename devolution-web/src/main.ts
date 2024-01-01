import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import GameLoopWorker from './worker/GameLoopWorker?worker';
import type { WorkerMessageType } from './worker/message/common';
import { useMetricStore } from './stores/metric';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');

const metric = useMetricStore();
function tick() {
  console.debug(`${new Date().getTime()} - tick()`);
  metric.tick();
}

const worker = new GameLoopWorker();
worker.addEventListener('message', (messageEvent: MessageEvent): void => {
  const { data } = messageEvent;
  if (typeof data === 'object') {
    const workerMessage = data as WorkerMessageType;
    if (workerMessage.type === 'TickMessage') {
      tick();
    } else if (workerMessage.type === 'InitMessage') {
      console.debug('Web worker initialized');
    }
  }
});
