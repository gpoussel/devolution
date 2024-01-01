import type { TickMessage } from './TickMessage';

export type WorkerMessageKind = 'TickMessage' | 'InitMessage';

export type WorkerMessageType = { type: WorkerMessageKind } & (
  | { type: 'InitMessage' }
  | { type: 'TickMessage'; payload: TickMessage }
);
