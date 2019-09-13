import * as React from 'react';

interface PageLayoutProps {
  header: JSX.Element;
  body: JSX.Element;
  footer: JSX.Element;
}

export function PageLayout({ header, body, footer }: PageLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="flex-grow-0 relative z-10">{header}</header>
      <main className="flex-grow relative z-0">{body}</main>
      <footer className="flex-grow-0 relative z-10">{footer}</footer>
    </div>
  );
}
