import type { Meta, StoryObj } from '@storybook/react';
import { DialogTitle } from './DialogueTitle';

const meta = {
  title: 'Components/DialogTitle',
  component: DialogTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dialog Title',
    subTitle: 'This is a subtitle for the dialog that is relatively long',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Dialog Title',
  },
};

export const SubTitleOnly: Story = {
  args: {
    subTitle: 'This is a subtitle without a title',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Welcome to Our Application',
    subTitle:
      'This is a longer subtitle that provides more context and information about what this dialog is for and what the user should do next.',
  },
};
