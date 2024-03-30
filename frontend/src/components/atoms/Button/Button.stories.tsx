import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Button', onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  }
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  }
}

export const Loading: Story = {
  args: {
    variant: 'secondary',
    isLoading: true,
  }
}