import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

import colors from '@/colors';

const theme = createTheme({
  shadows: shadows.map(() => 'none'),
  palette: {
    type: 'dark',
    background: {
      paper: colors.primary.normal,
    },
    shape: {
      borderRadius: '0.6rem',
    },
    primary: {
      main: colors.secondary.normal,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      variants: [
        {
          props: { variant: 'white' },
          style: {
            backgroundColor: colors.white,
            color: colors.primary.dark,
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          // color: colors.secondary.normal,
        },
      },
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    allVariants: {
      color: colors.white,
    },
    subtitle1: {
      color: colors.primary.veryLight,
    },
  },
});

export default theme;
