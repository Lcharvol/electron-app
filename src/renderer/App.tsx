import { ColorModeProvider } from '@/contexts/colorMode';
import useMediaQuery from '@mui/material/useMediaQuery';
import Bootstrap from './Bootstrap';
import Router from './Router';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <ColorModeProvider initialColorMode={prefersDarkMode ? 'dark' : 'light'}>
      <Bootstrap>
        <Router />
      </Bootstrap>
    </ColorModeProvider>
  );
}
