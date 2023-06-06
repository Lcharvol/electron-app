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
        {
          props: { variant: 'outlined-white' },
          style: {
            color: colors.white,
            borderColor: 'white',
            border: 'solid 0.1rem',
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
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxSizing: 'border-box',
        },
      },
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            background: `linear-gradient(to right bottom, ${colors.secondary.normal}, ${colors.secondary.dark} 120%);`,
            padding: '1rem',
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
    MuiTabPanel: {},
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          color: colors.font.normal,
          borderColor: colors.font.normal,
          borderRadius: '0.4rem',
        },
      },
      variants: [
        {
          props: { kind: 'success' },
          style: {
            color: colors.state.success,
            borderColor: colors.state.success,
          },
        },
        {
          props: { kind: 'error' },
          style: {
            color: colors.state.error,
            borderColor: colors.state.error,
          },
        },
        {
          props: { kind: 'warning' },
          style: {
            color: colors.state.warning,
            borderColor: colors.state.warning,
          },
        },
      ],
    },
    MuiTable: {
      styleOverrides: {
        root: { borderColor: 'red' },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: colors.font.normal,
          borderColor: colors.primary.light,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: { borderColor: 'red' },
      },
    },
  },
  typography: {
    fontFamily: ['Geologica', 'sans-serif'].join(','),
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
