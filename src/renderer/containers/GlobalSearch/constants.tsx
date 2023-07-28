import { constantRoutes } from '@/constants';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const routesMatching = [
  {
    label: 'Settings',
    render: (children: ReactNode) => (
      <Link to={constantRoutes.SETTINGS}>{children}</Link>
    ),
  },
];

export const matchingItems = [...routesMatching];
