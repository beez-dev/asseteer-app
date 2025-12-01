import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import styles from './LinkedText.module.scss';
import { IconType } from 'react-icons';

export interface LinkedTextProps {
  text: string;
  path: string;
  Icon?: IconType;
  className?: string;
}

export const LinkedText = React.forwardRef<HTMLDivElement, LinkedTextProps>(
  ({ text, path, className, Icon }, ref) => {
    return (
      <Link href={path} className="flex flex-row items-center justify-center gap-x-2">
        {Icon && <Icon size={12} className={styles.icon} />}
        <div className={cn(styles.linkedText, 'text-sm font-semibold py-0', className)}>{text}</div>
      </Link>
    );
  },
);

LinkedText.displayName = 'LinkedText';
