import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Components/Avatar',
  component: Avatar,
};

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: { src: 'https://avatars.githubusercontent.com/u/23408500?v=4' },
  parameters: {
    controls: { include: ['variant', 'src', 'children', 'size'] },
    docs: {
      description: {
        story: 'The component doesn’t have built-in spacing by default.',
        component: 'The header component.',
      },
    },
  },
};

export default meta;
