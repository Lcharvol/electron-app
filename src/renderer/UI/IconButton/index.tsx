import React from 'react';
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';
import { Icon } from '@mdi/react';
import colors from '@/colors';

interface IconButtonProps extends MuiIconButtonProps {
  iconPath: string;
  color?: string;
}
const IconButton = ({
  iconPath,
  color = colors.grey.light,
}: IconButtonProps) => {
  return (
    <MuiIconButton>
      <Icon size={0.8} path={iconPath} color={color} />
    </MuiIconButton>
  );
};

export default IconButton;
