import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';
import AllRoutes from 'routes';
import { sayHello } from './app.service';

export type Props = {};

export const App: React.FC<Props> = () => (
  <ThemeProvider theme={theme}>
    <div>{sayHello('Chirag')}</div>
    <AllRoutes />
  </ThemeProvider>
);
