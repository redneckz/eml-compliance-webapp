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
  [SectionKind.Primary]: 'bg-neutral text-black border-primary',
  [SectionKind.Secondary]: 'bg-neutral text-black border-primary'
};

export function Section({ className, kind = SectionKind.Primary, title, children }: SectionProps) {
  return (
    <section
      className={[
        'flex flex-no-wrap items-center',
        'border-l-4',
        'px-2 md:px-4',
        'h-12 md:h-16',
        SECTION_STYLES_MAP[kind],
        className
      ]
        .filter(Boolean)
        .join(' ')}
      title={title}
    >
      <div
        className={[
          'flex-grow-0 flex-shrink-0',
          'text-base tracking-tight',
          'w-24',
          'hidden md:block md:mr-2',
          kind === SectionKind.Primary ? 'font-bold' : 'font-semibold'
        ].join(' ')}
      >
        {title}
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
}
