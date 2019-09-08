import * as React from 'react';

export enum ButtonKind {
  Odd = 'odd',
  Even = 'even',
  Emp = 'emp',
  Misc = 'misc'
}

const BUTTON_STYLES_MAP: { [key in ButtonKind]: string } = {
  [ButtonKind.Odd]: 'border-gray-400 hover:border-gray-200 text-gray-800 ',
  [ButtonKind.Even]: 'border-green-400 hover:border-green-200 text-green-800',
  [ButtonKind.Emp]: 'border-red-400 hover:border-red-200 text-red-800',
  [ButtonKind.Misc]: 'border-orange-400 hover:border-orange-200 text-orange-800'
};

interface ButtonProps extends JSX.ElementChildrenAttribute {
  className?: string;
  kind?: ButtonKind;
  disabled?: boolean;
  onClick: () => any;
}

export function Button({ className, kind = ButtonKind.Odd, disabled, onClick, children }: ButtonProps) {
  const disabledClassName = disabled ? 'opacity-50 cursor-wait' : 'cursor-pointer';
  return (
    <button
      className={[
        'flex flex-no-wrap items-center justify-center',
        'bg-transparent',
        'font-semibold',
        'py-1 px-4',
        'border',
        'shadow',
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
