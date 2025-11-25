import * as React from 'react';
import { Input as BaseInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import styles from './Input.module.scss';

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return <BaseInput ref={ref} className={cn('h-12', styles.input, className)} {...props} />;
  },
);

Input.displayName = 'Input';
