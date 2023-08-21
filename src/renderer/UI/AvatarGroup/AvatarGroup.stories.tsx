import type { Meta, StoryObj } from '@storybook/react';

import AvatarGroup from '.';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Design System/Components/AvatarGroup',
  component: AvatarGroup,
};

type Story = StoryObj<typeof AvatarGroup>;

export const Basic: Story = {
  args: {
    items: [
      { src: 'https://avatars.githubusercontent.com/u/23408500?v=4' },
      { src: 'https://avatars.githubusercontent.com/u/23408500?v=4' },
      { src: 'https://avatars.githubusercontent.com/u/23408500?v=4' },
    ],
  },
  parameters: {
    controls: { include: ['items', 'max', 'total', 'size'] },
  },
};

export default meta;
