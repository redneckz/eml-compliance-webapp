import * as React from 'react';

export enum SectionKind {
  Primary,
  Secondary
}

interface SectionProps extends JSX.ElementChildrenAttribute {
  className?: string;
  kind: SectionKind;
  title?: string;
}

const SECTION_STYLES_MAP: { [key in SectionKind]: string } = {
  [SectionKind.Primary]: 'bg-white text-black',
  [SectionKind.Secondary]: 'bg-neutral text-black'
};

export function Section({ className, kind = SectionKind.Primary, title, children }: SectionProps) {
  return (
    <section
      className={[
        'flex flex-no-wrap items-center',
        'border-l-4 border-primary',
        'px-2 md:px-4',
        'h-12 md:h-16',
        SECTION_STYLES_MAP[kind],
        className
      ]
        .filter(Boolean)
        .join(' ')}
      title={title}
    >
      <div className="flex-grow-0 flex-shrink-0 font-semibold text-base tracking-tight w-24 hidden md:block md:mr-2">
        {title}
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
}
