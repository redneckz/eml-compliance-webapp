import * as React from 'react';

interface ProgressBarProps {
  waitTime?: number;
}

export function ProgressBar({ waitTime }: ProgressBarProps) {
  const wrapperStyle = waitTime ? {} : { display: 'hidden' };
  const barStyle: React.CSSProperties = waitTime
    ? { width: '100%', transition: `width ${waitTime}s linear` }
    : { width: '0%' };
  return (
    <div style={wrapperStyle} className="w-full p-0 bg-n-dark" role="progressbar">
      <div style={barStyle} className="h-1 bg-primary" />
    </div>
  );
}
