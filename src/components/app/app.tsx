import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Todos from 'components/examples/Todos';
import { theme } from 'theme';
import { sayHello } from './app.service';

export type Props = {};

export const App: React.FC<Props> = () => (
  <ThemeProvider theme={theme}>
    <div>{sayHello('Chirag')}</div>
    <Todos />
  </ThemeProvider>
);
