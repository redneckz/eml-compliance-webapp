import * as React from 'react';
import pluralize from 'pluralize';
import * as Domain from '../Domain';
import { MotionResource } from '../API';
import { Section, SectionKind, useDataPolling } from '../modules';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function SecurityAndMotionBar() {
  const motion = useDataPolling(MotionResource.get, DATA_POLLING_TIMEOUT);
  return (
    <Section title="Security /Motion" kind={SectionKind.Secondary}>
      {formatMotion(motion)}
    </Section>
  );
}

function formatMotion(motion?: Domain.MotionStatus) {
  return motion && motion.Motion ? `Motion in ${motion.Motion} ${pluralize('area')}` : 'No motion';
}
