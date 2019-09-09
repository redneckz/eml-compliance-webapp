import * as React from 'react';
import * as Domain from '../Domain';
import { Icon, Section, SectionKind, IconButton, IconButtonKind } from '../modules';

const ALERT_ICONS_MAP: {
  [key in Domain.AlertKind]: React.ReactElement<React.ComponentProps<typeof Icon.Icon>, typeof Icon.Icon>;
} = {
  [Domain.AlertKind.Fire]: <Icon.Fire />,
  [Domain.AlertKind.Weather]: <Icon.Weather />,
  [Domain.AlertKind.Shooter]: <Icon.Gun />
};

interface AlertSectionProps {
  toggledAlert?: Domain.AlertKind;
  alerts: Domain.AlertKind[];
  loading?: boolean;
  onToggle: (kind: Domain.AlertKind) => any;
}

export function EmergencyAudioAlertSection({ toggledAlert, alerts, loading, onToggle }: AlertSectionProps) {
  return alerts && alerts.length ? (
    <Section title="Emergency Audio Alert" kind={SectionKind.Odd}>
      <div className="flex flex-no-wrap">
        <Icon.Warn className="mr-4 w-8 h-8" />
        {alerts.map(kind => (
          <IconButton
            key={kind.toString()}
            className="mr-4 w-8 h-8"
            kind={toggledAlert === kind ? IconButtonKind.Emp : IconButtonKind.Odd}
            icon={ALERT_ICONS_MAP[kind]}
            disabled={loading}
            onClick={() => onToggle(kind)}
          />
        ))}
      </div>
    </Section>
  ) : null;
}
