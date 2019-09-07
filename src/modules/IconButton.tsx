import * as React from 'react';
import { Icon } from '../icons';

export enum IconButtonKind {
  Odd = 'odd',
  Even = 'even',
  Emp = 'emp',
  Misc = 'misc'
}

const BUTTON_STYLES_MAP: { [key in IconButtonKind]: string } = {
  [IconButtonKind.Odd]: 'text-gray-800',
  [IconButtonKind.Even]: 'text-green-800',
  [IconButtonKind.Emp]: 'text-red-800',
  [IconButtonKind.Misc]: 'text-orange-800'
};

interface IconButtonProps {
  className?: string;
  kind?: IconButtonKind;
  icon: React.ReactElement<React.ComponentProps<typeof Icon>, typeof Icon>;
  disabled?: boolean;
  onClick: () => any;
}

export function IconButton({ className, kind = IconButtonKind.Odd, icon, disabled, onClick }: IconButtonProps) {
  const disabledClassName = disabled ? 'opacity-50 cursor-wait' : 'cursor-pointer';
  return React.cloneElement(icon, {
    className: ['block', disabledClassName, BUTTON_STYLES_MAP[kind], className].filter(Boolean).join(' '),
    role: 'button',
    'aria-disabled': disabled ? 'true' : undefined,
    onClick: disabled ? undefined : onClick
  });
}
