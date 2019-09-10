import * as React from 'react';
import { PageLayout } from '../modules';

interface ComplianceTestPageLayoutProps {
  testBar: JSX.Element;
  alertBar?: JSX.Element | null;
  motionBar: JSX.Element;
  floorPlan: JSX.Element;
  humidityBar?: JSX.Element | null;
  temperatureBar?: JSX.Element | null;
}

export function ComplianceTestPageLayout({
  testBar,
  alertBar,
  motionBar,
  floorPlan,
  humidityBar,
  temperatureBar
}: ComplianceTestPageLayoutProps) {
  return (
    <PageLayout
      header={renderToolbar([testBar, alertBar])}
      body={
        <div className="absolute inset-0 overflow-auto overflow-x-hidden border-t border-b border-primary">
          {floorPlan}
        </div>
      }
      footer={renderToolbar([motionBar, humidityBar, temperatureBar])}
    />
  );
}

function renderToolbar(sections: (JSX.Element | null | undefined)[]) {
  const visibleSections = sections.filter(Boolean) as JSX.Element[];
  if (!visibleSections || !visibleSections.length) return <div />;
  if (visibleSections.length === 1) return <div className="w-full">{visibleSections[0]}</div>;
  return (
    <div className="flex flex-wrap">
      {visibleSections.map((section, i) => (
        <div key={i} className={`w-1/${visibleSections.length}`}>
          {section}
        </div>
      ))}
    </div>
  );
}
