import type { Meta, StoryObj } from '@storybook/react'
import { SocialButton } from './social-button'

const meta = {
  title: 'UI/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['google', 'facebook', 'github'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof SocialButton>

export default meta
type Story = StoryObj<typeof meta>

export const Google: Story = {
  args: {
    variant: 'google',
    children: 'Continue with Google',
  },
}

export const Facebook: Story = {
  args: {
    variant: 'facebook',
    children: 'Continue with Facebook',
  },
}

export const GitHub: Story = {
  args: {
    variant: 'github',
    children: 'Continue with GitHub',
  },
}

export const GoogleSmall: Story = {
  args: {
    variant: 'google',
    size: 'sm',
    children: 'Google',
  },
}

export const GoogleLarge: Story = {
  args: {
    variant: 'google',
    size: 'lg',
    children: 'Continue with Google',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <SocialButton variant="google">Continue with Google</SocialButton>
      <SocialButton variant="facebook">Continue with Facebook</SocialButton>
      <SocialButton variant="github">Continue with GitHub</SocialButton>
    </div>
  ),
}
