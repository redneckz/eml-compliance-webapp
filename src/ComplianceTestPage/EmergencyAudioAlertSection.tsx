import * as React from 'react';
import * as Domain from '../Domain';
import { Icon, Section, SectionKind, ToggleButton } from '../modules';

const ALERT_ICONS_MAP: {
  [key in Domain.AlertKind]: React.ReactElement<React.ComponentProps<typeof Icon.Icon>, typeof Icon.Icon>;
} = {
  [Domain.AlertKind.Fire]: <Icon.Fire className="w-6" />,
  [Domain.AlertKind.Weather]: <Icon.Weather className="w-6" />,
  [Domain.AlertKind.Shooter]: <Icon.Gun className="w-6" />
};

interface AlertSectionProps {
  toggledAlert?: Domain.AlertKind;
  alerts: Domain.AlertKind[];
  loading?: boolean;
  onToggle: (kind: Domain.AlertKind) => any;
}

export function EmergencyAudioAlertSection({ toggledAlert, alerts, loading, onToggle }: AlertSectionProps) {
  return (
    <Section title="Emergency Audio Alert" kind={SectionKind.Primary}>
      <div className="flex flex-no-wrap">
        {alerts.map(kind => (
          <ToggleButton
            key={kind.toString()}
            className="mr-2"
            active={toggledAlert === kind}
            disabled={loading}
            onClick={() => onToggle(kind)}
          >
            {ALERT_ICONS_MAP[kind]}
          </ToggleButton>
        ))}
      </div>
    </Section>
  );
}
