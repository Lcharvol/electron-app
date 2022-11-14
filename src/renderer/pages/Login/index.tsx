import React from 'react';
import { PageLayout, PageStepper } from '@/UI';

import useAuth from '@/contexts/auth';
import Home from './Home';
import { Container, Content } from './styles';
import Subscribe from './Subscribe';

const Login = () => {
  const { user, loading, error, login, signUp, logout } = useAuth();
  const pages = [
    {
      pageNumber: 0,
      component: Home,
    },
    {
      pageNumber: 1,
      component: Subscribe,
    },
  ];
  return (
    <Container>
      <Content>
        <Home login={login} />
      </Content>
    </Container>
  );
  // return (
  //   <PageStepper
  //     pages={pages}
  //     layout={(children) => (
  //       <Container>
  //         <Content>{children}</Content>
  //       </Container>
  //     )}
  //   />
  // );
};

export default Login;
