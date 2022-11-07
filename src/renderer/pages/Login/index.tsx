import React from 'react';
import { Grid, FeedbackButton, PageLayout, Button, Typography } from '@/UI';
import { fakeApi } from '@/faker';
import styled from 'styled-components';
import colors from '@/colors';
import { mdiApple, mdiGoogle } from '@mdi/js';

const StyledButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.black};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  width: 20rem;
`;
const Login = () => {
  return (
    <PageLayout>
      <Container>
        <Content>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>Bienvenue dans Teame👋</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography weight="light">
                Teame est un outil de gestion pour les freelances et les
                entreprises 👨‍💻
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledButton variant="white" fullWidth startIconPath={mdiGoogle}>
                Continuer avec Google
              </StyledButton>
            </Grid>
            <Grid item xs={12}>
              <StyledButton variant="white" fullWidth startIconPath={mdiApple}>
                Continuer avec Apple
              </StyledButton>
            </Grid>
            <Grid item xs={12}>
              <Typography weight="light" variant="caption">
                Vous pouvez aussi continuer avec une adresse e-mail
              </Typography>
            </Grid>
          </Grid>
        </Content>
      </Container>
    </PageLayout>
  );
};

export default Login;
