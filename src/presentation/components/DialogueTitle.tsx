import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DialogTitleProps {
  title?: string;
  subTitle?: string;
  className?: string;
}

export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ title, subTitle, className }, ref) => {
    return (
      <div ref={ref} className={cn('p-4 flex flex-col gap-y-4 text-center', className)}>
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-gray-400 text-sm font-semibold">{subTitle}</div>
      </div>
    );
  },
);

DialogTitle.displayName = 'DialogTitle';
