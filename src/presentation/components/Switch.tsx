import * as React from 'react';
import { Switch as BaseSwitch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import styles from './Switch.module.scss';

export const Switch = React.forwardRef<
  React.ElementRef<typeof BaseSwitch>,
  React.ComponentProps<typeof BaseSwitch> & {
    enabledLabel?: string;
    disabledLabel?: string;
    id: string; // id is required
  }
>(({ className, enabledLabel, disabledLabel, id, ...props }, ref) => {
  const switchId = id + '-switch';

  const [checked, setChecked] = React.useState(props?.checked ?? false);

  return (
    <div className="flex flex-row gap-x-3 items-center">
      {checked && enabledLabel && (
        <Label htmlFor={switchId} className="text-xs cursor-pointer text-white">
          {enabledLabel}
        </Label>
      )}
      {!checked && disabledLabel && (
        <Label htmlFor={switchId} className="text-xs cursor-pointer text-gray-300">
          {disabledLabel}
        </Label>
      )}
      <BaseSwitch
        id={switchId}
        ref={ref}
        className={cn('cursor-pointer', styles.switch, className)}
        onCheckedChange={setChecked}
        {...props}
      />
    </div>
  );
});

Switch.displayName = 'Switch';

const Renderer = (props: ControlProps) => {
  const {
    data,
    handleChange,
    path,
    uischema: { options },
  } = props;

  if (!options?.id) return null;

  return (
    <Switch
      id={options.id}
      checked={data || false}
      onCheckedChange={(checked) => handleChange(path, checked)}
      enabledLabel={options?.enabledLabel as string}
      disabledLabel={options?.disabledLabel as string}
      disabled={options?.disabled}
    />
  );
};

export const FormSwitch = withJsonFormsControlProps(Renderer);
