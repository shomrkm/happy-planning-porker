import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'layout/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {}