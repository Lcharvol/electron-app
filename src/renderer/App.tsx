import styled from 'styled-components';
import { mdiApps } from '@mdi/js';
import { Icon } from '@mdi/react';
import { AppSidenav, TopMenu } from '@/containers';
import colors from '@/colors';
import { Button, PageLayout } from '@/UI';
import Bootstrap from './Bootstrap';
import { fakeUser } from './faker';
import Router from './Router';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
const AppTopMenu = () => {
  return (
    <TopMenu
      left={<Icon path={mdiApps} size={1.5} color={colors.secondary.normal} />}
      right={<Button href="/login">Login</Button>}
    />
  );
};

export default function App() {
  return (
    <Bootstrap>
      <Container>
        {/* <PageLayout
          menu={<AppSidenav user={fakeUser} />}
          topMenu={<AppTopMenu />}
        > */}
        <Router />
        {/* </PageLayout> */}
      </Container>
    </Bootstrap>
  );
}
