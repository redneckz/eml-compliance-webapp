import * as React from 'react';

export function useTimer(
  onEnd: () => any = () => {},
  delta: number = 100
): [number | undefined, (waitTimePromise: number | Promise<number>) => void] {
  const [time, setTime] = React.useState<number>();
  const timerId = React.useRef<NodeJS.Timeout>();
  const clearTimer = () => {
    try {
      if (timerId.current) clearTimeout(timerId.current);
    } catch (ex) {
      // Do nothing
    }
  };
  React.useEffect(() => clearTimer, []);
  const startTimer = React.useCallback(
    async (waitTimePromise: number | Promise<number>) => {
      clearTimer();
      setTime(0);
      try {
        const waitTime = await waitTimePromise;
        const startTime = Date.now();
        const step = () => {
          timerId.current = setTimeout(() => {
            const relativeTime = (Date.now() - startTime) / waitTime;
            if (relativeTime < 1) {
              setTime(relativeTime);
              step();
            } else {
              setTime(1);
              onEnd();
            }
          }, delta);
        };
        step();
      } catch (ex) {
        setTime(1);
        throw ex;
      }
    },
    [onEnd, delta, timerId]
  );
  return [time, startTimer];
}
