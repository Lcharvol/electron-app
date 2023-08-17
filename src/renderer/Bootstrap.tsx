import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import styled, { ThemeProvider } from 'styled-components';
import React, { ReactNode, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/contexts/auth';
import colors from '@/colors';
import getTheme from './muiTheme';
import useColorMode from './contexts/colorMode';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ $colorMode }: { $colorMode: string }) =>
    $colorMode === 'light' ? colors.white : colors.black.verydark};
`;

export interface BootstrapProps {
  children: ReactNode;
}

function Bootstrap({ children }: BootstrapProps) {
  const { colorMode } = useColorMode();
  const theme = useMemo(() => createTheme(getTheme(colorMode)), [colorMode]);

  return (
    <Container $colorMode={colorMode}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}

export default Bootstrap;
