import * as React from 'react';

export type SVGIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export function makeIcon(SomeIcon: SVGIcon): SVGIcon {
  return ({ className, ...rest }) => (
    <SomeIcon className={['inline-block fill-current', className].filter(Boolean).join(' ')} {...rest} />
  );
}
