import { ReactNode } from 'react';
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';
import { Icon } from '@mdi/react';

interface IconButtonProps extends MuiIconButtonProps {
  iconPath?: string;
  color?: string;
  children?: ReactNode;
  onClick?: () => void;
}
const IconButton = ({
  iconPath,
  color,
  children,
  onClick,
}: IconButtonProps) => {
  return (
    <MuiIconButton onClick={onClick} color="primary">
      {children}
      {iconPath && <Icon size={0.8} path={iconPath} color={color} />}
    </MuiIconButton>
  );
};

export default IconButton;
