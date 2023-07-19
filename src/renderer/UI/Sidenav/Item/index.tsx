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
      $isSmall={isSmall}
      $isSelected={isSelected}
      onClick={route?.onClick}
    >
      <StyledIcon path={route.icon} size={1} $isSmall={isSmall} />
      <Label
        $isSelected={isSelected}
        weight="roman"
        $isSmall={isSmall}
        variant="subtitle2"
        color={isSelected ? 'font.normal' : 'font.disabled'}
      >
        {route.label}
      </Label>
    </StyledNavLink>
  );
};

export default Item;
