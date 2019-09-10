import * as React from 'react';

export function LastAnomalySection({ children }: JSX.ElementChildrenAttribute) {
  return (
    <div className="flex flex-no-wrap flex-col justify-between items-end text-xs lg:text-sm">
      <div>
        <strong className="font-bold">Last Anomaly</strong>
      </div>
      <div>{children}</div>
    </div>
  );
}
