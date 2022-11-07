import Stack from '@mui/material/Stack';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TopMenuProps {
  left?: ReactNode;
  middle?: ReactNode;
  right?: ReactNode;
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 1rem;
`;
const Middle = styled.div`
  display: flex;
  flex: 5;
`;
const Right = styled(Stack)`
  padding: 1rem;
`;
const TopMenu = ({ left, middle, right }: TopMenuProps) => {
  return (
    <Container>
      <Left>{left}</Left>
      <Middle>{middle}</Middle>
      <Right spacing={2} direction="row">
        {right}
      </Right>
    </Container>
  );
};

export default TopMenu;
