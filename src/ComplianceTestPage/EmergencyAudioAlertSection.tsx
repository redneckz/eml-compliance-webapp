import * as React from 'react';
import { API } from '../API';
import { Icon, WarnIcon, FireIcon, WeatherIcon, GunIcon } from '../icons';
import { Section, SectionKind, IconButton, IconButtonKind } from '../modules';

const ALERT_ICONS_MAP: {
  [key in API.AlertKind]: React.ReactElement<React.ComponentProps<typeof Icon>, typeof Icon>;
} = {
  [API.AlertKind.Fire]: <FireIcon w={32} />,
  [API.AlertKind.Weather]: <WeatherIcon w={32} />,
  [API.AlertKind.Shooter]: <GunIcon w={32} />
};

interface AlertSectionProps {
  toggledAlert?: API.AlertKind;
  alerts: API.AlertKind[];
  loading?: boolean;
  onToggle: (kind: API.AlertKind) => any;
}

export function EmergencyAudioAlertSection({ toggledAlert, alerts, loading, onToggle }: AlertSectionProps) {
  return alerts && alerts.length ? (
    <Section title="Emergency Audio Alert" kind={SectionKind.Odd}>
      <div className="flex flex-no-wrap">
        <WarnIcon className="mr-4" w={32} />
        {alerts.map(kind => (
          <IconButton
            key={kind.toString()}
            className="mr-4"
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
