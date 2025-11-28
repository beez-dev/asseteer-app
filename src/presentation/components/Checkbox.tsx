import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import styles from './Checkbox.module.scss';
import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof BaseCheckbox>,
  React.ComponentProps<typeof BaseCheckbox> & {
    label?: string;
    id: string; // id is required
  }
>(({ className, label, id, ...props }, ref) => {
  const checkboxId = id + '-checkbox';

  return (
    <div className="flex flex-row gap-x-3 items-center">
      <BaseCheckbox
        id={checkboxId}
        ref={ref}
        className={cn('cursor-pointer outline-gray-600 rounded-xs', styles.checkbox, className)}
        {...props}
      />
      <Label htmlFor={checkboxId} className="text-xs cursor-pointer">
        {label}
      </Label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

const Renderer = (props: ControlProps) => {
  const {
    uischema: { label = '', options },
  } = props;

  if (!options?.id) return null;

  return <Checkbox id={options.id} label={label as string} />;
};

export const FormCheckbox = withJsonFormsControlProps(Renderer);
