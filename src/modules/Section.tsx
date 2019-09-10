import * as React from 'react';

export enum SectionKind {
  Primary,
  Secondary,
  Neutral
}

interface SectionProps extends JSX.ElementChildrenAttribute {
  className?: string;
  kind: SectionKind;
  title?: string;
}

const SECTION_STYLES_MAP: { [key in SectionKind]: string } = {
  [SectionKind.Primary]: 'bg-p-dark text-white',
  [SectionKind.Secondary]: 'bg-p-light text-black',
  [SectionKind.Neutral]: 'bg-neutral text-black'
};

export function Section({ className, kind = SectionKind.Primary, title, children }: SectionProps) {
  return (
    <section
      className={[
        'flex flex-no-wrap items-center',
        'border-l-4 border-primary',
        'px-2 sm:px-4',
        'h-12 sm:h-16',
        SECTION_STYLES_MAP[kind],
        className
      ]
        .filter(Boolean)
        .join(' ')}
      title={title}
    >
      <div className="flex-grow-0 flex-shrink-0 font-semibold text-base tracking-tight w-24 hidden sm:block sm:mr-2">
        {title}
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
}
