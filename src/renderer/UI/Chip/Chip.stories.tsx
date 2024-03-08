import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@mdi/react';
import { mdiFaceMan } from '@mdi/js';
import Chip from '.';
import Avatar from '../Avatar';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
};

type Story = StoryObj<typeof Chip>;

const baseParameters = {
  controls: { include: ['variant', 'color', 'size'] },
};
export const Basic: Story = {
  args: { label: 'Chip' },
  parameters: baseParameters,
};

export const Clickable: Story = {
  args: { label: 'Chip', onClick: () => {} },
  parameters: baseParameters,
};

export const Deletable: Story = {
  args: { label: 'Chip', onDelete: () => {} },
  parameters: baseParameters,
};

export const AvatarChip: Story = {
  args: {
    label: 'Lucas Charvolin',
    avatar: (
      <Avatar
        size="small"
        src="https://avatars.githubusercontent.com/u/23408500?v=4"
      />
    ),
  },
  parameters: baseParameters,
};

export const IconChip: Story = {
  args: {
    label: 'Lucas Charvolin',
    avatar: <Icon path={mdiFaceMan} />,
  },
  parameters: baseParameters,
};

export default meta;
