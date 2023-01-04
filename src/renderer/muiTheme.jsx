import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

import colors from '@/colors';

const theme = createTheme({
  shadows: shadows.map(() => 'none'),
  palette: {
    type: 'dark',
    background: {
      paper: colors.primary.dark,
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
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: colors.secondary.normal,
            color: colors.white,
            '&:hover': { backgroundColor: colors.secondary.dark },
          },
        },
        {
          props: { variant: 'white' },
          style: {
            backgroundColor: colors.white,
            color: colors.primary.dark,
            '&:hover': {
              backgroundColor: colors.grey.veryLight,
            },
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: colors.grey.dark,
          opacity: 0.2,
          height: '0.1px',
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            backgroundColor: colors.secondary.medium,
          },
        },
        {
          props: { variant: 'noPadding' },
          style: {
            '.MuiCardContent-root': {
              padding: 0,
            },
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
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: colors.grey.dark,
          '&.Mui-selected': {
            color: colors.white,
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: { background: 'red' },
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
      color: colors.grey.dark,
      fontSize: 13,
    },
  },
});

export default theme;
