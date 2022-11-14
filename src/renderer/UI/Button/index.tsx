import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { Icon } from '@mdi/react';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
  margin-right: 1rem;
`;

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true;
    primary: true;
  }
}
export interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  startIconPath?: string;
}
const Button = ({
  children,
  onClick,
  variant,
  fullWidth,
  startIconPath,
}: ButtonProps) => {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant}
      style={{ textTransform: 'none' }}
      fullWidth={fullWidth}
    >
      {startIconPath && <StyledIcon path={startIconPath} size={1} />}
      {children}
    </MuiButton>
  );
};

export default Button;
