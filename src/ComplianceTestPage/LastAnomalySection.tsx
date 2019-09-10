import * as React from 'react';

export function LastAnomalySection({ children }: JSX.ElementChildrenAttribute) {
  return (
    <div className="flex flex-col justify-between items-end text-xs lg:text-sm tracking-tight">
      <div>
        <strong className="font-semibold">Last Anomaly</strong>
      </div>
      <div>{children}</div>
    </div>
  );
}
