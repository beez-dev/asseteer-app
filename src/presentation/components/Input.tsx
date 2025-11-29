import * as React from 'react';
import { Input as BaseInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import styles from './Input.module.scss';
import { ControlProps } from '@jsonforms/core';
import { Label } from './Label';
import { withJsonFormsControlProps } from '@jsonforms/react';

export interface InputProps extends React.ComponentProps<'input'> {
  isError?: boolean;
  errorMsg?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMsg, isError, label, id, required, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <Label htmlFor={id} className={'mb-2 font-bold'}>
            <>{label}</>
            {required && <>*</>}
          </Label>
        )}
        <BaseInput
          id={id}
          ref={ref}
          className={cn(
            'h-12 focus-visible:ring-0 text-white',
            styles.input,
            { [styles.error]: isError },
            className,
          )}
          placeholder={'Enter your text here'}
          {...props}
        />
        {errorMsg && isError && <div className={cn('mt-2', styles.errorTxt)}>{errorMsg}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';

const Renderer = (props: ControlProps) => {
  const {
    visible,
    data,
    handleChange,
    path,
    uischema: { label, options },
    id,
    errors,
  } = props;

  if (!visible) return null;

  const inputId = `${id}-input`;

  return (
    <Input
      id={inputId}
      value={data || ''}
      onChange={(e) => handleChange(path, e.target.value)}
      errorMsg={errors}
      type={options?.inputType}
      label={label as string}
      required={options?.required}
      placeholder={options?.placeholder}
    />
  );
};

export const FormInput = withJsonFormsControlProps(Renderer);
