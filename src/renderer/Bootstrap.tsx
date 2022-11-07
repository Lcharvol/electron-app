import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import muiTheme from './muiTheme';
import theme from './theme';

export interface BootstrapProps {
  children: ReactNode;
}

const Bootstrap = ({ children }: BootstrapProps) => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Bootstrap;
