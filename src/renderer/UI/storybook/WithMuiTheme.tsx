import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import styled, { ThemeProvider, css } from 'styled-components';
import { useMemo } from 'react';
import getTheme from '../../muiTheme';

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ left, fill, theme }) => css`
    position: absolute;
    top: 0;
    left: ${left || fill ? 0 : '50vw'};
    border-right: ${left ? '1px solid #202020' : 'none'};
    right: ${left ? '50vw' : 0};
    width: ${fill ? '100vw' : '50vw'};
    height: 100vh;
    bottom: 0;
    overflow: auto;
    padding: 1rem;
    background: ${theme.palette.background.paper};
  `
);
function WithMuiTheme(Story, context) {
  const { theme: themeKey } = context.globals;
  const darkTheme = createTheme(getTheme('dark'));
  const lightTheme = createTheme(getTheme('light'));
  const theme = useMemo(() => createTheme(getTheme(themeKey)), [themeKey]);

  if (themeKey === 'side-by-side') {
    return (
      <>
        <MuiThemeProvider theme={lightTheme}>
          <CssBaseline />
          <ThemeBlock left theme={lightTheme}>
            <Story />
          </ThemeBlock>
        </MuiThemeProvider>
        <MuiThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ThemeBlock theme={darkTheme}>
            <Story />
          </ThemeBlock>
        </MuiThemeProvider>
      </>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeBlock fill>
          <Story />
        </ThemeBlock>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default WithMuiTheme;
