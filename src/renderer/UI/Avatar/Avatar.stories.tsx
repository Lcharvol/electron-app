import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './index';

const meta: Meta<typeof Avatar> = { component: Avatar };

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = { args: {} };

export default meta;
