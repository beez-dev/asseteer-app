import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './password-input'

const meta = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Enter your password',
    value: 'secretpassword123',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your password',
    disabled: true,
  },
}

export const CustomClassName: Story = {
  args: {
    placeholder: 'Enter your password',
    className: 'bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400',
  },
}
