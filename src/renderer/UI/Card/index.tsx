import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Divider from '../Divider';

const StyledActions = styled(CardActions)`
  padding: 2rem;
`;

export interface CardProps {
  children?: ReactNode;
  header?: ReactNode;
  actions?: ReactNode;
  hasHeaderDivider?: boolean;
}

const Card = ({
  children,
  header,
  hasHeaderDivider,
  actions,
  ...props
}: CardProps) => {
  return (
    <MuiCard {...props}>
      {header}
      {hasHeaderDivider && <Divider />}
      <CardContent>{children}</CardContent>
      {actions && <StyledActions>{actions}</StyledActions>}
    </MuiCard>
  );
};

export default Card;
