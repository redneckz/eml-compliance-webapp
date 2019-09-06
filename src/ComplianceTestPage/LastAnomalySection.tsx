import * as React from 'react';

export function LastAnomalySection({ children }: JSX.ElementChildrenAttribute) {
  return (
    <div className="flex flex-no-wrap flex-col justify-between items-center text-xs">
      <div>
        <strong className="font-bold">Last Anomaly</strong>
      </div>
      <div>{children}</div>
    </div>
  );
}
