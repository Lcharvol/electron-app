import React, { ReactNode } from 'react';
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';
import { Icon } from '@mdi/react';
import colors from '@/colors';

interface IconButtonProps extends MuiIconButtonProps {
  iconPath?: string;
  color?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
const IconButton = ({
  iconPath,
  color = colors.grey.light,
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
