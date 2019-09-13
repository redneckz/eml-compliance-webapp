import * as React from 'react';

interface ProgressBarProps {
  className?: string;
  now?: number;
  min?: number;
  max?: number;
}

export function ProgressBar({ className, now = 0, min = 0, max = 100 }: ProgressBarProps) {
  const barWidth = Math.max(0, Math.min(100, Math.floor(((now - min) * 100) / (max - min))));
  return (
    <div
      className={['w-full', 'p-0', 'bg-n-dark', className].filter(Boolean).join(' ')}
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <div style={{ width: `${barWidth}%` }} className="h-1 bg-primary trans" />
    </div>
  );
}
