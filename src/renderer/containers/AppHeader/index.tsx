import React from 'react';
import { IconButton, Badge } from '@/UI';
import styled from 'styled-components';
import { mdiBellOutline } from '@mdi/js';
import UserDropDown from './UserDropDown';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  padding-right: 1rem;
`;

const AppHeader = () => {
  return (
    <Container>
      <Badge badgeContent={3} color="primary">
        <IconButton iconPath={mdiBellOutline} />
      </Badge>
      <UserDropDown />
    </Container>
  );
};

export default AppHeader;
