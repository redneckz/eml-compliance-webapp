import * as React from 'react';
import { Cross } from '../Icon';
import { AlertDef } from './AlertDef';

interface AlertProps extends AlertDef {
  onClose: () => any;
}

export function Alert({ title, description, onClose }: AlertProps) {
  return (
    <div className="bg-error border border-error rounded text-base text-white p-2 relative shadow" role="alert">
      <strong className="font-semibold tracking-tight mr-2">{title}</strong>
      <span className="block sm:inline">{description}</span>
      <span className="absolute top-0 right-0">
        <Cross className="block w-4 h-4" role="button" onClick={onClose} />
      </span>
    </div>
  );
}
