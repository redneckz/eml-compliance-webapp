import * as React from 'react';
import { PageLayout } from '../modules';

interface ComplianceTestPageLayoutProps {
  testBar: JSX.Element;
  alertBar: JSX.Element;
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
          <div className="w-full">{testBar}</div>
          <div className="w-full md:w-1/2">{alertBar}</div>
          <div className="w-full md:w-1/2">{motionBar}</div>
        </div>
      }
      body={floorPlan}
      footer={
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">{humidityBar}</div>
          <div className="w-full md:w-1/2">{temperatureBar}</div>
        </div>
      }
    />
  );
}
