import type { Meta, StoryObj } from '@storybook/react';

import FeedbackButton from '.';

const meta: Meta<typeof FeedbackButton> = {
  title: 'Components/FeedbackButton',
  component: FeedbackButton,
};

type Story = StoryObj<typeof FeedbackButton>;

export const Basic: Story = {
  args: {
    children: 'Button',
    onClick: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
  parameters: {
    controls: { include: ['isLoading', 'isSuccess', 'isFailure', 'fullWidth'] },
  },
};

export default meta;
