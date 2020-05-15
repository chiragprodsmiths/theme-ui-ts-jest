import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../../theme';

export type Props = {};

export const App: React.FC<Props> = () => (
  <ThemeProvider theme={theme}>
    <div>Hello world is not</div>
  </ThemeProvider>
);
