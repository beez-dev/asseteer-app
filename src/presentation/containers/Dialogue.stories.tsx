import type { Meta, StoryObj } from '@storybook/react';
import { DialogueContainer } from './Dialogue';
import { DialogTitle } from '../components/DialogueTitle';

const meta = {
  title: 'Containers/DialogueContainer',
  component: DialogueContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogueContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px' }}>
        <DialogTitle
          title="Dialog Container"
          subTitle="This is an example of content inside the dialogue container"
        />
        <p>Additional content goes here...</p>
      </div>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: 'custom-dialogue-class',
    children: (
      <div style={{ padding: '20px' }}>
        <DialogTitle title="Custom Styled Dialogue" />
        <p>This dialogue has a custom className applied.</p>
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: <div style={{ padding: '20px', minWidth: '300px' }}>Empty dialogue container</div>,
  },
};
