import React from 'react';
import { Grid, Button, Typography, FeedbackButton } from '@/UI';
import styled from 'styled-components';
import colors from '@/colors';
import { mdiApple, mdiGoogle } from '@mdi/js';

const StyledButton = styled(FeedbackButton)`
  background-color: ${colors.white};
  color: ${colors.black};
`;
interface HomeProps {
  goToNextStep?: () => void;
  login: () => void;
}
const Home = ({ goToNextStep, login }: HomeProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>Bienvenue dans Stiff</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography weight="light">
          Stiff est un outil de gestion pour les freelances et les entreprises
          👨‍💻
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <StyledButton
          onClick={() => login({ email: '', password: '' })}
          variant="primary"
          fullWidth
          startIconPath={mdiGoogle}
        >
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
      <Grid item xs={12}>
        <Typography
          weight="light"
          variant="caption"
          color={colors.font.secondary}
        >
          En cliquant sur les boutons de connexion ci-dessus vous reconaissez
          avoir lu, compris et accepté les Conditions générales et la Politique
          de confidentialité de Stiff
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
