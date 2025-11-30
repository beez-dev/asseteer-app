import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'OR',
  },
};

export const WithLongerText: Story = {
  args: {
    text: 'or continue with',
  },
};
