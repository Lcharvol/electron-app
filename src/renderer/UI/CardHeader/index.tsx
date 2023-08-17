import MuiCardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(MuiCardHeader)`
  min-height: 3rem;
  position: relative;
  /* width: 100%; */
`;

const StyledTitle = styled(Typography)`
  text-transform: uppercase;
`;

const StyledIcon = styled.div`
  height: 100%;
  width: 3rem;
`;

const StyledAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 3rem;
`;

export interface CardHeaderProps {
  title?: string;
  subheader?: string;
  icon?: Node;
  action?: Node;
}

function CardHeader({ title, subheader, icon, action }: CardHeaderProps) {
  return (
    <StyledContainer
      avatar={icon && <StyledIcon>{icon}</StyledIcon>}
      action={<StyledAction>{action}</StyledAction>}
      title={<StyledTitle>{title}</StyledTitle>}
      subheader={subheader}
      // disableTypography={false}
      // titleTypographyProps={{ variant: "h1", color: "red" }}
      // subheaderTypographyProps={{ variant: "subtitle1" }}
    />
  );
}

export default CardHeader;
