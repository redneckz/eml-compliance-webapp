import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
  w?: number;
  h?: number;
  viewBox?: string;
  path?: string;
}

export function Icon({ className, w = 24, h = w, viewBox = `0 0 ${w} ${h}`, path, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={['fill-current', className].filter(Boolean).join(' ')}
      width={w}
      height={h}
      viewBox={viewBox}
      {...rest}
    >
      <path d={path} />
    </svg>
  );
}
