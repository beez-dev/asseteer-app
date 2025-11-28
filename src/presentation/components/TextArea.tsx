import * as React from 'react';
import { Textarea as BaseTextarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import styles from './TextArea.module.scss';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  isError?: boolean;
  errorMsg?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMsg, isError, ...props }, ref) => {
    return (
      <>
        <BaseTextarea
          ref={ref}
          className={cn(
            'min-h-16 focus-visible:ring-0',
            styles.textarea,
            { [styles.error]: isError },
            className,
          )}
          placeholder={'Enter your text here'}
          {...props}
        />
        {errorMsg && isError && <div className={cn('mt-2', styles.errorTxt)}>{errorMsg}</div>}
      </>
    );
  },
);

TextArea.displayName = 'TextArea';
