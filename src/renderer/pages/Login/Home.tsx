import styled from 'styled-components';
import { mdiApple, mdiGoogle } from '@mdi/js';
import { Grid, Typography, FeedbackButton } from '@/UI';
import colors from '@/colors';
import { useNotification } from '@/hooks';

const StyledButton = styled(FeedbackButton)`
  background-color: ${colors.white};
  color: ${colors.black};
`;
interface HomeProps {
  goToNextStep?: () => void;
  login: (data: { email: string; password: string }) => void;
}
const Home = ({ goToNextStep, login }: HomeProps) => {
  const { openNotification } = useNotification();

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
        <StyledButton
          variant="white"
          fullWidth
          startIconPath={mdiApple}
          onClick={() =>
            openNotification({
              title: 'ceci est un titre',
              body: 'ceci est un body',
            })
          }
        >
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
          color={colors.darkFont.secondary}
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
