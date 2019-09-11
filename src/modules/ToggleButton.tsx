import * as React from 'react';

interface ToggleButtonProps {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => any;
  children?: {};
}

export function ToggleButton({ className, active, disabled, onClick, children }: ToggleButtonProps) {
  const disabledClassName = disabled ? 'opacity-75 cursor-wait' : 'cursor-pointer';
  return (
    <button
      className={[
        'flex flex-no-wrap items-center justify-center',
        'text-sm leading-none',
        'border rounded',
        'trans-fast',
        'shadow',
        'p-2',
        'focus:outline-none',
        active
          ? 'bg-primary text-black border-primary hover:bg-p-dark hover:text-white'
          : 'bg-transparent text-black border-transparent hover:bg-p-dark hover:text-white',
        disabledClassName,
        className
      ]
        .filter(Boolean)
        .join(' ')}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
