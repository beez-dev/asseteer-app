import * as React from 'react';
import { Input as BaseInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        className={cn('h-12 bg-pr-blue-800 border-pr-blue-600', className)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
