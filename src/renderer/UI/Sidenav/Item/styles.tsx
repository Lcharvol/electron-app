import { Icon } from '@mdi/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Typography from '../../Typography';

type StyledElemProps = {
  disabled: boolean;
  $isSelected: boolean;
  $hasColoredBackground?: boolean;
  $isSmall?: boolean;
};

export const StyledNavLink = styled(NavLink)<StyledElemProps>`
  display: flex;
  align-items: center;
  ${({ $isSmall }) => $isSmall && 'justify-content: center;'}
  padding: ${({ $isSmall }) => ($isSmall ? '0.8rem 0.1rem' : '0.8rem 1rem')};
  margin-bottom: 0.7rem;
  border-radius: 0.6rem;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  & > * {
    transition: all 0.1s ease-in-out;
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.palette.menuSelected : theme.palette.menuNotSelected};
  }
  background-color: ${({ $isSelected, theme }) =>
    $isSelected && theme.palette.secondary.light};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    & > * {
      color: ${({ theme }) => theme.palette.menuSelected};
    }
  }
`;

export const Label = styled(Typography)<StyledElemProps>`
  max-width: ${({ $isSmall }) => ($isSmall ? '0rem' : '100%')};
  max-height: ${({ $isSmall }) => $isSmall && '0rem'};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;

export const StyledIcon = styled(Icon)<StyledElemProps>`
  margin-right: ${({ $isSmall }) => ($isSmall ? 0 : '1rem')};
`;
