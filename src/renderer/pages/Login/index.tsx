import React from 'react';

import useAuth from '@/contexts/auth';
import Home from './Home';
import { Container, Content } from './styles';
import Subscribe from './Subscribe';

function Login() {
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
}

export default Login;
