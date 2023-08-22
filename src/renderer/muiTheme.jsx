import { createTheme } from '@mui/material/styles';
import colors from '@/colors';

const getTheme = (mode) => {
  const isDark = mode === 'dark';
  return {
    shadows: [
      ...createTheme({}).shadows.map((shadow, i) =>
        i === 1 ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : shadow
      ),
    ],
    shape: {
      borderRadius: '0.3rem',
    },
    palette: {
      type: mode || 'dark',
      background: isDark ? colors.black.verydark : colors.white,
      white: colors.white,
      grey: colors.grey,
      black: colors.black,
      menuSelected: isDark ? colors.darkFont.normal : colors.blue.normal,
      menuNotSelected: isDark
        ? colors.darkFont.secondary
        : colors.lightFont.secondary,
      ...(!isDark
        ? {
            // palette values for light mode
            contrastThreshold: 4.5,
            background: {
              paper: colors.white,
            },
            primary: {
              light: colors.blue.light,
              main: colors.blue.normal,
              dark: colors.blue.dark,
            },
            secondary: {
              light: colors.blue.background,
              main: colors.grey.ultralight,
              dark: colors.grey.veryLight,
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
            primary: {
              light: colors.blue.light,
              main: colors.blue.normal,
              dark: colors.blue.dark,
            },
            secondary: {
              light: colors.black.light,
              main: colors.black.normal,
              dark: colors.black.dark,
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
          variant: 'primary',
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
            props: { variant: 'outlined' },
            style: {
              color: isDark ? colors.white : colors.blue.normal,
              borderColor: isDark ? colors.white : colors.blue.normal,
              '&:hover': {
                borderColor: isDark ? colors.white : colors.blue.normal,
              },
            },
          },
          {
            props: { variant: 'outlined-white' },
            style: {
              color: colors.white,
              border: `solid 0.1rem ${colors.white}`,
              '&:hover': {
                borderColor: colors.white,
              },
            },
          },
          {
            props: { variant: 'searchBar' },
            style: {
              color: isDark
                ? colors.darkFont.secondary
                : colors.lightFont.secondary,
              borderColor: isDark
                ? colors.darkFont.secondary
                : colors.lightFont.disabled,
              border: 'solid 0.01rem',
              borderRadius: '0.4rem',
              backgroundColor: isDark
                ? colors.black.normal
                : colors.blue.background,
              '&:hover': {
                opacity: 0.7,
                backgroundColor: isDark
                  ? colors.black.normal
                  : colors.blue.background,
              },
            },
          },
        ],
      },
      MuiAvatarGroup: {
        styleOverrides: {
          root: {
            borderColor: 'red',
          },
          avatar: {
            backgroundColor: isDark
              ? colors.black.veryLight
              : colors.grey.medium,
            borderColor: isDark ? colors.black.verydark : colors.white,
          },
        },
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
            props: { variant: 'outlined' },
            style: {
              borderColor: isDark
                ? colors.black.veryLight
                : colors.grey.veryLight,
            },
          },
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
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: colors.blue.normal,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: isDark
              ? colors.darkFont.secondary
              : colors.lightFont.secondary,
            '&.Mui-selected': {
              color: isDark ? colors.blue.normal : colors.blue.normal,
            },
          },
        },
      },
      MuiChip: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
          },
        },
        variants: [
          {
            props: { variant: 'outlined' },
            style: {},
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
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            borderColor: isDark ? colors.black.light : colors.grey.veryLight,
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
          root: {},
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? colors.black.normal : colors.white,
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
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark
              ? colors.darkFont.secondary
              : colors.lightFont.secondary,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark
                ? colors.darkFont.normal
                : colors.lightFont.disabled,
              borderWidth: '0.12rem',
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          fullWidth: true,
        },
        variants: [
          {
            props: { kind: 'simple' },
            style: {
              borderColor: 'blue',
              '& .MuiInputBase-root': {
                '& fieldset': {
                  border: 'none',
                },
                backgroundColor: 'transparent',
                borderColor: 'blue',
              },
              '& .MuiInputBase': {
                backgroundColor: 'transparent',
                borderColor: 'blue',
              },
            },
          },
        ],
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '.MuiSvgIcon-root': {
              color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            },
          },
          inputRoot: { borderColor: 'red' },
          option: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
            backgroundColor: isDark ? colors.black.dark : colors.white,
            '&:hover': {
              backgroundColor: isDark
                ? colors.black.verydark
                : colors.grey.ultralight,
            },
          },
          noOptions: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.normal,
          },
          endAdornment: { color: colors.darkFont.normal },
          clearIndicator: { color: colors.darkFont.normal },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: isDark ? colors.darkFont.normal : colors.lightFont.secondary,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: '0.7rem',
            border: `solid 0.01rem ${
              isDark ? colors.darkFont.disabled : colors.lightFont.disabled
            }`,
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          badge: {
            color: isDark ? colors.darkFont.normal : colors.white,
            backgroundColor: colors.blue.light,
          },
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
        color: isDark ? colors.darkFont.secondary : colors.lightFont.secondary,
        fontSize: 13,
      },
      caption: {
        color: isDark ? colors.darkFont.secondary : colors.lightFont.secondary,
      },
    },
  };
};

export default getTheme;
