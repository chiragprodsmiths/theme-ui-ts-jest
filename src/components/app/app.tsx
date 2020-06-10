import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';
import { AuthProvider } from 'components/auth/auth.provider';
import PublicRouter from 'router/router.public';
import ProtectedRouter from 'router/router.protected';

type Props = {};

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PublicRouter />
        <ProtectedRouter />
      </AuthProvider>
    </ThemeProvider>
  );
};
