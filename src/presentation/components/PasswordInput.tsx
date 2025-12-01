import * as React from 'react';
import { Input as BaseInput } from './Input';
import { cn } from '@/lib/utils';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from './Input.module.scss';
import { ControlProps } from '@jsonforms/core';
import { Label } from './Label';
import { withJsonFormsControlProps } from '@jsonforms/react';

export interface PasswordInputProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  isError?: boolean;
  errorMsg?: string;
  label?: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, errorMsg, isError, label, id, required, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="flex flex-col">
        {label && (
          <Label htmlFor={id} className={'mb-2 font-bold'}>
            <>{label}</>
            {required && <> *</>}
          </Label>
        )}
        <div className="relative">
          <BaseInput
            id={id}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            isError={isError}
            errorMsg={errorMsg}
            className={cn(
              'h-12 focus-visible:ring-0 text-white pr-10',
              styles.input,
              { [styles.error]: isError },
              className,
            )}
            placeholder={'Enter your password'}
            disabled={disabled}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-4 right-3 text-gray-400 cursor-pointer hover:text-white transition-colors"
            tabIndex={-1}
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

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

  const inputId = `${id}-password-input`;

  return (
    <PasswordInput
      id={inputId}
      value={data || ''}
      onChange={(e) => handleChange(path, e.target.value)}
      errorMsg={errors}
      label={label as string}
      required={options?.required}
      placeholder={options?.placeholder}
    />
  );
};

export const FormPasswordInput = withJsonFormsControlProps(Renderer);
