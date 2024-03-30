import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    variant: 'light',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  }
}