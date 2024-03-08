import type { Meta, StoryObj } from '@storybook/react';
import { mdiDotsVertical } from '@mdi/js';
import IconButton from '.';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
};

type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    iconPath: mdiDotsVertical,
  },
  parameters: {
    controls: { include: ['color'] },
  },
};

export default meta;
