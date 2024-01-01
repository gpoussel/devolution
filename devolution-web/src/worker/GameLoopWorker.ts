import type { WorkerMessageType } from './message/common';

self.onmessage = function () {
  console.log('on message');
};

function post(message: WorkerMessageType) {
  self.postMessage(message);
}

function postTickMessage() {
  post({
    type: 'TickMessage',
    payload: {
      time: performance.now(),
    },
  });
}

function postInitMessage() {
  post({
    type: 'InitMessage',
  });
}

postInitMessage();
setInterval(postTickMessage, 1000);
