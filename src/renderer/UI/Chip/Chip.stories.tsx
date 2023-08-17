// CSF 3

import type { Meta, StoryObj } from '@storybook/react';

import Chip from '.';

const meta: Meta<typeof Chip> = { component: Chip };

type Story = StoryObj<typeof Chip>;

export const Basic: Story = { args: { label: 'online' } };

export default meta;
