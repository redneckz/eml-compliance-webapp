import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
  viewBox?: string;
  path?: string;
}

export function Icon({ className, viewBox = `0 0 24 24`, path, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={['fill-current', className].filter(Boolean).join(' ')}
      viewBox={viewBox}
      {...rest}
    >
      <path d={path} />
    </svg>
  );
}
