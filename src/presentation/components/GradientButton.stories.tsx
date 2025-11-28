import type { Meta, StoryObj } from '@storybook/react';
import { GradientButton } from './GradientButton';

const meta = {
  title: 'Components/GradientButton',
  component: GradientButton,
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
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Gradient Button',
    variant: 'default',
    size: 'default',
  },
};
