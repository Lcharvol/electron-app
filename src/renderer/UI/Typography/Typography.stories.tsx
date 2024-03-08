import type { Meta, StoryObj } from '@storybook/react';

import Typography from '.';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
};

type Story = StoryObj<typeof Typography>;

export const Basic: Story = { args: {} };

export default meta;
