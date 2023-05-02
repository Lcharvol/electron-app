import React from 'react';
import { IconButton } from '@/UI';
import styled from 'styled-components';
import { mdiCogOutline } from '@mdi/js';
import ServicesHealthCheck from '../ServicesHealthCheck';

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
      <ServicesHealthCheck />
      <IconButton iconPath={mdiCogOutline} />
    </Container>
  );
};

export default AppHeader;
