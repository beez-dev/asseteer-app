import * as React from 'react';
import { Button as BaseButton } from './Button';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import { withJsonFormsControlProps } from '@jsonforms/react';

import styles from './Button.module.scss';
import gradientStyles from './GradientButton.module.scss';
import { ControlProps } from '@jsonforms/core';

const buttonVariants = cva(
  " inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'h-12 px-6 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-14 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, isLoading, children, disabled, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          gradientStyles.gradientButton,
          'cursor-pointer',
          {
            '!cursor-not-allowed': isLoading || disabled,
          },
        )}
        variant={variant}
        size={size}
        asChild={asChild}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner}></span>
            {children}
          </>
        ) : (
          children
        )}
      </BaseButton>
    );
  },
);

GradientButton.displayName = 'GradientButton';

const Renderer = (props: ControlProps) => {
  const {
    uischema: { label = '' },
  } = props;

  return (
    <GradientButton>
      <>{label}</>
    </GradientButton>
  );
};

export const FormGradientButton = withJsonFormsControlProps(Renderer);
