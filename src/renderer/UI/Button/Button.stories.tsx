import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Basic: Story = { args: { children: 'Button' } };

export default meta;
