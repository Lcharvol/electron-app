import type { Meta, StoryObj } from '@storybook/react';

import Tabs from '.';
import Typography from '../Typography';
import Box from '../Box';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Components/Tabs',
  component: Tabs,
};

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {
    items: [
      {
        label: 'Tab1',
        component: () => (
          <Box sx={{ p: 2 }}>
            <Typography>Tab1</Typography>
          </Box>
        ),
      },
      {
        label: 'Tab2',
        component: () => (
          <Box sx={{ p: 2 }}>
            <Typography>Tab2</Typography>
          </Box>
        ),
      },
      {
        label: 'Tab3',
        component: () => (
          <Box sx={{ p: 2 }}>
            <Typography>Tab3</Typography>
          </Box>
        ),
      },
    ],
  },
  parameters: {
    controls: { include: ['items'] },
  },
};

export default meta;
