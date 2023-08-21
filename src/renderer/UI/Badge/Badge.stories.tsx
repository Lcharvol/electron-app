// CSF 3

import type { Meta, StoryObj } from '@storybook/react';

import Badge from '.';
import Button from '../Button';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Components/Badge',
  component: Badge,
};

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: { children: <Button>Notification</Button>, badgeContent: 3 },
};

export default meta;
