import type { Meta, StoryObj } from '@storybook/react';
import { SocialButton } from './SocialButton';

const meta = {
  title: 'Components/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Continue with Google',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Sign in with Google',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Continue with Google',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Signing in...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Continue with Google',
  },
};
