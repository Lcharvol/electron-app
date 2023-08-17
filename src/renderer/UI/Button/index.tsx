import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { ReactNode } from 'react';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true;
    primary: true;
  }
}
export interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  startIcon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outlined' | 'searchBar';
}
function Button({
  children,
  onClick,
  variant,
  fullWidth,
  startIcon,
  endIcon,
  size,
}: ButtonProps) {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant}
      style={{ textTransform: 'none' }}
      fullWidth={fullWidth}
      endIcon={endIcon}
      size={size}
    >
      {startIcon}
      {children}
    </MuiButton>
  );
}

export default Button;
