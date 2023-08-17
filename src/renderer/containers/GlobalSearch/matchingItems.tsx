import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiNoteOutline, mdiCogOutline } from '@mdi/js';
import styled from 'styled-components';
import { constantRoutes } from '@/constants';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  user-select: none;
`;

const routesMatching = [
  {
    label: 'Settings',
    render: (children: ReactNode) => (
      <StyledLink to={constantRoutes.SETTINGS}>{children}</StyledLink>
    ),
    iconPath: mdiNoteOutline,
  },
];

const actionsMatching = [
  {
    label: 'Color mode',
    render: (children: ReactNode) => (
      <StyledLink to={constantRoutes.SETTINGS}>{children}</StyledLink>
    ),
    iconPath: mdiCogOutline,
  },
];

const matchingItems = [...routesMatching, ...actionsMatching];

export default matchingItems;
