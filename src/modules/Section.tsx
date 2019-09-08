import * as React from 'react';

export enum SectionKind {
  Odd = 'odd',
  Even = 'even',
  Emp = 'emp',
  Misc = 'misc'
}

interface SectionProps extends JSX.ElementChildrenAttribute {
  kind: SectionKind;
  title?: string;
}

const SECTION_STYLES_MAP: { [key in SectionKind]: string } = {
  [SectionKind.Odd]: 'bg-gray-100 border-gray-500 text-gray-700',
  [SectionKind.Even]: 'bg-green-100 border-green-500 text-green-700',
  [SectionKind.Emp]: 'bg-red-100 border-red-500 text-red-700',
  [SectionKind.Misc]: 'bg-orange-100 border-orange-500 text-orange-700'
};

export function Section({ kind, title, children }: SectionProps) {
  return (
    <section
      className={[
        'flex flex-no-wrap items-center',
        'border-l-4',
        'pl-2 pr-2',
        'md:pl-4 md:pr-4',
        'h-12',
        'font-mono',
        SECTION_STYLES_MAP[kind]
      ].join(' ')}
    >
      <div className="flex-grow-0 flex-shrink-0 font-bold w-32">{title}</div>
      <div className="flex-grow">{children}</div>
    </section>
  );
}
