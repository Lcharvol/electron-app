import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '.';
import Button from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Components/Tooltip',
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: (
      <span>
        <Button>Hover me</Button>
      </span>
    ),
    title: 'This is a simple button',
  },
  parameters: {
    controls: { include: ['title', 'arrow', 'placement'] },
  },
};

export default meta;
