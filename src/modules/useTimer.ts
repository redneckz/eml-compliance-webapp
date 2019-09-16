import * as React from 'react';

export function useTimer(
  onEnd: () => any = () => {}
): [number | undefined, (waitTimePromise: number | Promise<number>) => void] {
  const unmounted = React.useRef<boolean>();
  React.useEffect(
    () => () => {
      unmounted.current = true;
    },
    []
  );
  const [time, setTime] = React.useState<number>();
  const updateTime = React.useCallback(
    (relativeTime: number) => {
      if (!unmounted.current) setTime(relativeTime);
    },
    [unmounted, setTime]
  );
  const startTimer = React.useCallback(
    async (waitTimePromise: number | Promise<number>) => {
      updateTime(0);
      try {
        const waitTime = await waitTimePromise;
        const doStep = step({
          waitTime,
          onStep: updateTime,
          onEnd
        });
        doStep();
      } catch (ex) {
        updateTime(1);
        throw ex;
      }
    },
    [updateTime, onEnd]
  );
  return [time, startTimer];
}

function step({
  waitTime,
  onStep,
  onEnd
}: {
  waitTime: number;
  onStep: (relativeTime: number) => any;
  onEnd: () => any;
}): () => NodeJS.Timeout {
  const startTime = Date.now();
  const doStep = () =>
    setTimeout(() => {
      const relativeTime = (Date.now() - startTime) / waitTime;
      if (relativeTime < 1) {
        onStep(relativeTime);
        doStep();
      } else {
        onStep(1);
        onEnd();
      }
    }, 100);
  return doStep;
}
