import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../../theme';

export type Props = {};

export const sayHello = (name: string): string => `Welcome to Arthify ${name}`;

export const App: React.FC<Props> = () => (
  <ThemeProvider theme={theme}>
    <div>{sayHello('Chirag')}</div>
  </ThemeProvider>
);
