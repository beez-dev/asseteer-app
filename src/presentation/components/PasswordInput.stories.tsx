import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Password',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Password',
    isError: true,
  },
};

export const ErrorWithMsg: Story = {
  args: {
    label: 'Password',
    errorMsg: 'Password must be at least 8 characters',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter a strong password',
  },
};
