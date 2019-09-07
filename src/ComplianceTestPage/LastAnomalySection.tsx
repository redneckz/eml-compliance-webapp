import * as React from 'react';

export function LastAnomalySection({ children }: JSX.ElementChildrenAttribute) {
  return (
    <div className="flex flex-no-wrap flex-col justify-between items-center">
      <div>
        <strong className="font-bold text-sm">Last Anomaly</strong>
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
}
