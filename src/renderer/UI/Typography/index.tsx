import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import colors from '@/colors';
import fonts, { WeightProps } from './fonts';

interface TypographyProps extends MuiTypographyProps {
  children?: ReactNode;
}
type Props = {
  weight?: WeightProps;
  color?: string;
  className?: string; // styled-component className
} & TypographyProps;

const StyledTypography = styled(MuiTypography)`
  color: ${colors.white};
`;

const Typography: React.FC<Props> = ({
  weight = 'heavy',
  children,
  variant,
  color,
  className,
}) => {
  const fontWeight = fonts.weightMap[weight];

  return (
    <StyledTypography
      className={className}
      variant={variant}
      style={{ fontWeight, color }}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
