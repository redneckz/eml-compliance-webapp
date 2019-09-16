import * as React from 'react';

export enum SectionKind {
  Primary,
  Secondary
}

interface SectionProps extends JSX.ElementChildrenAttribute {
  className?: string;
  kind: SectionKind;
  title?: {};
  aside?: {};
}

export function Section({ className, kind = SectionKind.Primary, title, children, aside }: SectionProps) {
  return (
    <section
      className={[
        'table table-fixed border-collapse',
        'w-full h-12 lg:h-16',
        'bg-neutral text-black',
        'text-base leading-tight tracking-tight',
        className
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="table-cell w-2 lg:w-4 border-l-4 border-primary" />
      <div
        className={[
          'md:table-cell hidden align-middle',
          'w-24 pr-2',
          kind === SectionKind.Primary ? 'font-bold' : 'font-semibold'
        ].join(' ')}
      >
        {title}
      </div>
      <div className="table-cell align-middle pr-2">{children}</div>
      {aside ? <div className="sm:table-cell hidden align-middle">{aside}</div> : null}
      <div className="table-cell w-2 lg:w-4" />
    </section>
  );
}
