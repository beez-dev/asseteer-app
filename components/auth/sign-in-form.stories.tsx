import type { Meta, StoryObj } from '@storybook/react'
import { SignInForm } from './sign-in-form'
import { fn } from '@storybook/test'

const meta = {
  title: 'Auth/SignInForm',
  component: SignInForm,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'gradient-dark',
      values: [
        { name: 'gradient-dark', value: 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 50%, #0f172a 100%)' },
        { name: 'dark', value: '#0f172a' },
        { name: 'darker', value: '#1e1b4b' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    onGoogleSignIn: fn(),
    onForgotPassword: fn(),
  },
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithCallbacks: Story = {
  args: {
    onSubmit: fn((data) => {
      console.log('Form submitted:', data)
      alert(`Signing in with:\nEmail: ${data.email}\nPassword: ${data.password}\nRemember Me: ${data.rememberMe}`)
    }),
    onGoogleSignIn: fn(() => {
      console.log('Google sign in clicked')
      alert('Google sign in clicked')
    }),
    onForgotPassword: fn(() => {
      console.log('Forgot password clicked')
      alert('Forgot password clicked')
    }),
  },
}

export const LightBackground: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {},
}

export const Interactive: Story = {
  args: {
    onSubmit: fn((data) => {
      console.log('Login attempt:', {
        email: data.email,
        password: '***',
        rememberMe: data.rememberMe,
      })
    }),
    onGoogleSignIn: fn(() => {
      console.log('Google OAuth initiated')
    }),
    onForgotPassword: fn(() => {
      console.log('Password reset requested')
    }),
  },
  play: async ({ canvasElement }) => {
    // This story can be used for interaction testing
  },
}
