import { CardMedia, Card, Typography, Button, Box } from '@/UI';
import { WalletMap } from '@/containers';

const Home = () => {
  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Box sx={{ mb: '2rem' }}>
        <Card
          sx={{ position: 'relative' }}
          variant="filled"
          hasHeaderDivider
          actions={<Button variant="outlined-white">Upgrade</Button>}
        >
          <Typography variant="h4" fontWeight="medium" color="white">
            Upgrade your plan
          </Typography>
          <Typography variant="subtitle2" color="white">
            Switch to a commercial plan to access advanced features & technical
            support.
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 200, position: 'absolute', top: 0, right: 0 }}
            image="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
          />
        </Card>
      </Box>
      <WalletMap />
    </Box>
  );
};

export default Home;
