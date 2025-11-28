import type { Meta, StoryObj } from '@storybook/react';
import { FormExample } from './Form';

const meta = {
  title: 'Components/Form',
  component: FormExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {},
};
