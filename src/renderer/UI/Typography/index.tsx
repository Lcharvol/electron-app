import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import React, { ReactNode } from 'react';

interface TypographyProps extends MuiTypographyProps {
  children?: ReactNode;
}
type Props = {
  className?: string; // styled-component className
} & TypographyProps;

const Typography: React.FC<Props> = ({
  children,
  variant,
  className,
  color,
}) => {
  return (
    <MuiTypography className={className} variant={variant} color={color}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
