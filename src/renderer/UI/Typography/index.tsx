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
} & TypographyProps;

const StyledTypography = styled(MuiTypography)`
  color: ${colors.white};
`;

const Typography: React.FC<Props> = ({
  weight = 'heavy',
  children,
  variant,
}) => {
  const fontWeight = fonts.weightMap[weight];

  return (
    <StyledTypography variant={variant} style={{ fontWeight }}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
