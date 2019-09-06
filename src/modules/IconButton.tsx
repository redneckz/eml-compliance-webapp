import * as React from 'react';
import { Icon, IconPath } from './Icon';

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
  kind?: IconButtonKind;
  w?: number;
  h?: number;
  path: IconPath;
  onClick: () => any;
}

export function IconButton({ w, h, kind = IconButtonKind.Odd, path, onClick }: IconButtonProps) {
  return (
    <Icon
      className={['block', 'cursor-pointer', BUTTON_STYLES_MAP[kind]].join(' ')}
      role="button"
      w={w}
      h={h}
      path={path}
      onClick={onClick}
    />
  );
}
