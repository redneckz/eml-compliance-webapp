import * as React from 'react';
import { Cross } from '../Icon';
import { IconButton } from '../IconButton';
import { AlertDef } from './AlertDef';

interface AlertProps extends AlertDef {
  onClose: () => any;
}

export function Alert({ title, description, onClose }: AlertProps) {
  return (
    <div className="bg-red-100 border border-red-500 text-red-700 text-sm p-2 relative shadow" role="alert">
      <strong className="font-bold mr-2">{title}</strong>
      <span className="block sm:inline">{description}</span>
      <span className="absolute top-0 right-0">
        <IconButton className="w-4 text-red-500" icon={<Cross />} onClick={onClose} />
      </span>
    </div>
  );
}
