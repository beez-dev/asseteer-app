import * as React from 'react';
import { cn } from '@/lib/utils';
import styles from './Error.module.scss';

export interface ErrorProps {
  message?: string;
  className?: string;
}

export const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
  ({ message, className }, ref) => {
    if (!message) return null;

    return (
      <div ref={ref} className={cn('mt-2', styles.errorTxt, className)}>
        {message}
      </div>
    );
  }
);

Error.displayName = 'Error';
