import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

import colors from '@/colors';

const getTheme = (mode) => {
  const isDark = mode === 'dark';
  return {
    shadows: shadows.map(() => 'none'),
    palette: {
      type: mode || 'dark',
      white: colors.white,
      grey: colors.grey,
      black: colors.black,
      ...(!isDark
        ? {
            // palette values for light mode
            contrastThreshold: 4.5,
            background: {
              paper: colors.white,
            },
            shape: {
              borderRadius: '0.6rem',
            },
            primary: {
              light: colors.grey.ultralight,
              main: colors.grey.veryLight,
              dark: colors.grey.light,
            },
            secondary: {
              light: colors.blue.normal,
              main: colors.blue.normal,
              dark: colors.blue.normal,
            },
            font: {
              normal: colors.lightFont.normal,
              secondary: colors.lightFont.secondary,
              disabled: colors.lightFont.disabled,
            },
          }
        : {
            // palette values for dark mode
            contrastThreshold: 4.5,
            background: {
              paper: colors.black.dark,
            },
            shape: {
              borderRadius: '0.6rem',
            },
            primary: {
              light: colors.black.normal,
              main: colors.black.normal,
              dark: colors.black.normal,
            },
            secondary: {
              light: colors.blue.normal,
              main: colors.blue.normal,
              dark: colors.blue.normal,
            },
            font: {
              normal: colors.darkFont.normal,
              secondary: colors.darkFont.secondary,
              disabled: colors.darkFont.disabled,
            },
          }),
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
              backgroundColor: colors.blue.normal,
              color: colors.white,
              '&:hover': { backgroundColor: colors.blue.dark },
            },
          },
          {
            props: { variant: 'white' },
            style: {
              backgroundColor: colors.white,
              color: colors.black.dark,
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
              background: `linear-gradient(to right bottom, ${colors.blue.normal}, ${colors.blue.dark} 120%);`,
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
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            '&.Mui-selected': {
              color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
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
            color: colors.darkFont.normal,
            borderColor: colors.darkFont.normal,
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
            color: colors.darkFont.normal,
            borderColor: colors.black.light,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: { borderColor: 'red' },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            paddingRight: 30,
            paddingLeft: 30,
            paddingTop: 10,
            paddingBottom: 10,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: colors.black.light,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? colors.black.normal : colors.white,
            minWidth: 300,
          },
          input: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            '&::placeholder': {
              color: isDark
                ? colors.darkFont.disabled
                : colors.lightFont.disabled,
            },
            fontWeight: 200,
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '.MuiSvgIcon-root': {
              color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            },
          },
          option: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            backgroundColor: isDark ? colors.black.dark : colors.white,
            '&:hover': {
              backgroundColor: isDark
                ? colors.black.verydark
                : colors.grey.ultralight,
            },
          },
          paper: {
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          },
          endAdornment: { color: colors.darkFont.normal },
          clearIndicator: { color: colors.darkFont.normal },
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
        color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
      },
      subtitle1: {
        color: colors.grey.dark,
        fontSize: 13,
      },
    },
  };
};

export default getTheme;
