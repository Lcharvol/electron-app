import type { Meta, StoryObj } from '@storybook/react';

import {
  mdiShieldAccountOutline,
  mdiHomeCircleOutline,
  mdiViewGridOutline,
} from '@mdi/js';
import Sidenav from '.';
import PageLayout from '../PageLayout';

const meta: Meta<typeof Sidenav> = {
  component: Sidenav,
};

type Story = StoryObj<typeof Sidenav>;

export const Basic: Story = {
  args: {
    routes: [
      {
        label: 'Home',
        path: '/home',
        icon: mdiHomeCircleOutline,
      },
      {
        label: 'Profil',
        path: '/profil',
        icon: mdiShieldAccountOutline,
      },
      {
        label: 'Project',
        path: '/project',
        icon: mdiViewGridOutline,
      },
    ],
    isSmall: false,
  },
  parameters: {
    controls: { include: ['routes'] },
  },
  render: ({ routes }) => <PageLayout menu={<Sidenav routes={routes} />} />,
};

export default meta;
