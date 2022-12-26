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
  const Container = route ? StyledNavLink : 'div';
  return (
    <Container
      to={route.path}
      exact={route?.exact}
      $isSmall={isSmall}
      $isSelected={isSelected}
      onClick={route?.onClick}
    >
      <StyledIcon path={route.icon} size={1} $isSmall={isSmall} />
      <Label
        color={isSelected ? colors.white : colors.primary.ultraLight}
        weight="roman"
        $isSmall={isSmall}
        variant="subtitle2"
      >
        {route.label}
      </Label>
    </Container>
  );
};

export default Item;
