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
  kind?: ButtonKind;
  onClick: () => any;
}

export function Button({ kind = ButtonKind.Odd, onClick, children }: ButtonProps) {
  return (
    <button
      className={[
        'bg-transparent',
        'font-semibold',
        'py-1',
        'px-4',
        'border',
        'shadow',
        'focus:outline-none',
        BUTTON_STYLES_MAP[kind]
      ].join(' ')}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
