import React from 'react';

import colors from '@/colors';

import { RouteType } from '../types';
import { Label, StyledIcon, StyledNavLink } from './styles';

type ItemProps = {
  route: RouteType;
  isSmall?: boolean;
  isSelected: boolean;
};

const Item = ({ route, isSmall, isSelected }: ItemProps) => {
  return (
    <StyledNavLink
      to={route.path}
      exact={route.exact}
      $isSmall={isSmall}
      $isSelected={isSelected}
    >
      <StyledIcon path={route.icon} size={1} $isSmall={isSmall} />
      <Label color={colors.primary.ultraLight} $isSmall={isSmall}>
        {route.label}
      </Label>
    </StyledNavLink>
  );
};

export default Item;
