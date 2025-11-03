import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'

const meta = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px]">
      <Divider />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <Divider label="Or continue with" />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-[200px] gap-4">
      <div>Left Content</div>
      <Divider orientation="vertical" />
      <div>Right Content</div>
    </div>
  ),
}

export const InForm: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="p-4 border rounded">
        <p>Sign in with email</p>
      </div>
      <Divider label="Or" className="text-slate-500" />
      <div className="p-4 border rounded">
        <p>Sign in with social</p>
      </div>
    </div>
  ),
}
