import * as React from 'react';

export enum ButtonKind {
  Primary,
  Secondary
}

const BUTTON_STYLES_MAP: { [key in ButtonKind]: string } = {
  [ButtonKind.Primary]: 'bg-primary text-black hover:bg-p-dark hover:text-white',
  [ButtonKind.Secondary]: 'bg-p-light text-black hover:bg-primary'
};

interface ButtonProps {
  className?: string;
  kind?: ButtonKind;
  disabled?: boolean;
  onClick: () => any;
  children?: {};
}

export function Button({ className, kind = ButtonKind.Primary, disabled, onClick, children }: ButtonProps) {
  const disabledClassName = disabled ? 'opacity-75 cursor-wait' : 'cursor-pointer';
  return (
    <button
      className={[
        'flex flex-no-wrap items-center justify-center',
        'text-sm',
        'border rounded',
        'p-2',
        'focus:outline-none',
        disabledClassName,
        BUTTON_STYLES_MAP[kind],
        className
      ].join(' ')}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
