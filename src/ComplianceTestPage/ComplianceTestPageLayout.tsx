import * as React from 'react';
import { PageLayout } from '../modules';

interface ComplianceTestPageLayoutProps {
  testBar: JSX.Element;
  alertBar: JSX.Element | null;
  motionBar: JSX.Element;
  floorPlan: JSX.Element;
  humidityBar: JSX.Element;
  temperatureBar: JSX.Element;
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
      header={
        <div className="flex flex-wrap">
          <div className={alertBar ? 'w-1/2' : 'w-full'}>{testBar}</div>
          {alertBar ? <div className="w-1/2">{alertBar}</div> : null}
        </div>
      }
      body={
        <div className="absolute inset-0 overflow-auto overflow-x-hidden border-t border-b border-primary">
          {floorPlan}
        </div>
      }
      footer={
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">{motionBar}</div>
          <div className="w-1/2 md:w-1/3">{humidityBar}</div>
          <div className="w-1/2 md:w-1/3">{temperatureBar}</div>
        </div>
      }
    />
  );
}
