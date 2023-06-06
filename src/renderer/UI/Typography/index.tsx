import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import colors from '@/colors';

interface TypographyProps extends MuiTypographyProps {
  children?: ReactNode;
}
type Props = {
  className?: string; // styled-component className
} & TypographyProps;

const StyledTypography = styled(MuiTypography)`
  color: ${colors.white};
`;

const Typography: React.FC<Props> = ({ children, variant, className }) => {
  return (
    <StyledTypography className={className} variant={variant}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
