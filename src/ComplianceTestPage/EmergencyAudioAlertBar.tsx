import * as React from 'react';
import { Section, SectionKind, Icon, IconPath } from '../modules';

export function EmergencyAudioAlertBar() {
  return (
    <Section title="Emergency Audio Alert" kind={SectionKind.Odd}>
      <div className="flex flex-no-wrap">
        <Icon className="mr-4" w={32} path={IconPath.Warn} />
        <Icon className="mr-4" w={32} path={IconPath.Fire} />
        <Icon className="mr-4" w={32} path={IconPath.Weather} />
        <Icon w={32} path={IconPath.Gun} />
      </div>
    </Section>
  );
}
