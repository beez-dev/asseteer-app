import * as React from 'react';
import { Button as BaseButton } from './Button';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaGoogle } from 'react-icons/fa';

import { withJsonFormsControlProps } from '@jsonforms/react';

import styles from './SocialButton.module.scss';
import { ControlProps } from '@jsonforms/core';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: cn(styles.socialButton), //'bg-primary text-primary-foreground hover:bg-primary/90',
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

export type SocialButtonType = 'Google';

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  socialButtonType?: SocialButtonType;
}

const socialButtonIcons = {
  Google: FaGoogle,
};

export const SocialButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      isLoading,
      children,
      disabled,
      socialButtonType,
      ...props
    },
    ref,
  ) => {
    return (
      <BaseButton
        ref={ref}
        isLoading={isLoading}
        className={cn(buttonVariants({ variant, size, className }), {
          '!cursor-not-allowed': isLoading || disabled,
        })}
        variant={variant}
        size={size}
        asChild={asChild}
        Icon={socialButtonIcons?.[socialButtonType || 'Google']}
        disabled={disabled || isLoading}
        {...props}
      >
        {children}
      </BaseButton>
    );
  },
);

SocialButton.displayName = 'SocialButton';

const Renderer = (props: ControlProps) => {
  const {
    uischema: { label = '' },
  } = props;

  return (
    <SocialButton>
      <>{label}</>
    </SocialButton>
  );
};

export const FormSocialButton = withJsonFormsControlProps(Renderer);
