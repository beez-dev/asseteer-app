import * as React from 'react';
import { Input as BaseInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import styles from './Input.module.scss';

export interface InputProps extends React.ComponentProps<'input'> {
  isError?: boolean;
  errorMsg?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMsg, isError, ...props }, ref) => {
    return (
      <>
        <BaseInput
          ref={ref}
          className={cn(
            'h-12 focus-visible:ring-0',
            styles.input,
            { [styles.error]: isError },
            className,
          )}
          placeholder={'Enter your text here'}
          {...props}
        />
        {errorMsg && isError && <div className={styles.errorTxt}>{errorMsg}</div>}
      </>
    );
  },
);

Input.displayName = 'Input';
