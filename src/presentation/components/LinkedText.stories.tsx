import type { Meta, StoryObj } from '@storybook/react';
import { LinkedText } from './LinkedText';
import { FaHome, FaUser, FaCog, FaArrowRight } from 'react-icons/fa';

const meta = {
  title: 'Components/LinkedText',
  component: LinkedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Click here to continue',
    path: '/dashboard',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Go to Home',
    path: '/home',
    Icon: FaHome,
  },
};

export const UserProfile: Story = {
  args: {
    text: 'View Profile',
    path: '/profile',
    Icon: FaUser,
  },
};

export const Settings: Story = {
  args: {
    text: 'Settings',
    path: '/settings',
    Icon: FaCog,
  },
};

export const WithArrow: Story = {
  args: {
    text: 'Continue',
    path: '/next',
    Icon: FaArrowRight,
  },
};
