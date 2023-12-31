export class GameLoop {
  private _running: boolean = false;
  private _fps: number = 0;

  public constructor(fps: number) {
    this._fps = fps;
  }

  public async start(callback: (arg: number) => void) {
    this._running = true;
    const fps = this._fps;
    async function* nextFrame() {
      let then = performance.now();
      const interval = 1000 / fps;
      let delta = 0;

      while (true) {
        const now = await new Promise(requestAnimationFrame);
        if (now - then < interval - delta) {
          continue;
        }
        delta = Math.min(interval, delta + now - then - interval);
        then = now;

        yield now;
      }
    }

    for await (const time of nextFrame()) {
      if (!this._running) {
        break;
      }
      callback(time);
    }
  }

  public stop() {
    this._running = false;
  }
}
