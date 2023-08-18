// CSF 3

import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '.';

const meta: Meta<typeof Button> = { component: Button };

type Story = StoryObj<typeof Button>;

export const Basic: Story = { args: { children: 'Button' } };

export const Variants: Story = {
  args: {
    children: 'Button',
  },
  parameters: { variants: ['primary'] },
  render: ({ variants }) => {
    console.log(
      ' Object.values(ButtonProps.variant): ',
      Object.values(ButtonProps.variant)
    );
    return Object.values(ButtonProps.variant).map((variant) => (
      <Button variant={variant}>test</Button>
    ));
  },
};

export default meta;
