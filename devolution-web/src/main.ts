import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { GameLoop } from './game/GameLoop';
import { useMetricStore } from './stores/metric';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');

const metric = useMetricStore();
const gameLoop = new GameLoop(5);
await gameLoop.start(() => {
  console.debug(`${new Date().getTime()} - tick()`);
  metric.tick();
});
