import React from 'react';
import { cn } from '@/lib/utils';

import styles from './Dialogue.module.scss';

export const DialogueContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
}) => {
  return <div className={cn(styles.dialogue, 'border border-gray-700')}>{children}</div>;
};
