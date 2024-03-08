import type { Meta, StoryObj } from '@storybook/react';

import ShortCut from '.';

const meta: Meta<typeof ShortCut> = {
  title: 'Components/ShortCut',
  component: ShortCut,
};

type Story = StoryObj<typeof ShortCut>;

export const Basic: Story = { args: { keys: ['meta', 'k'] } };

export default meta;
