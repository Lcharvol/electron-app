// CSF 3

import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';

const meta: Meta<typeof Table> = { component: Table };

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  args: {
    columns: [
      { header: 'name', field: 'name' },
      { header: 'age', field: 'age' },
      { header: 'status', field: 'status' },
    ],
    data: [
      { name: 'Lucas', age: '28', status: 'online' },
      { name: 'Pierre', age: '13', status: 'online' },
      { name: 'Paul', age: '35', status: 'offline' },
    ],
  },
};

export default meta;
