import React from 'react';
import { IconButton } from '@/UI';
import styled from 'styled-components';
import { mdiCogOutline } from '@mdi/js';

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
      <IconButton iconPath={mdiCogOutline} />
    </Container>
  );
};

export default AppHeader;
