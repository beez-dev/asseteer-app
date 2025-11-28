import * as React from 'react';
import { Label as BaseLabel } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export const Label = React.forwardRef<
  React.ElementRef<typeof BaseLabel>,
  React.ComponentProps<typeof BaseLabel>
>(({ className, ...props }, ref) => {
  return <BaseLabel ref={ref} className={cn(className)} {...props} />;
});

Label.displayName = 'Label';
