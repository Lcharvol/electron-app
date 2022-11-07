import MuiDivider from '@mui/material/Divider';
import React, { ReactNode } from 'react';

export interface DividerrProps {
  children?: ReactNode;
}

const Divider = ({ children, ...props }: DividerrProps) => {
  return <MuiDivider {...props}>{children}</MuiDivider>;
};

export default Divider;
