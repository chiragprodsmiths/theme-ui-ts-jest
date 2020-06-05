import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';
// import ProtectedRouter from 'router/router.protected';
import PublicRouter from 'router/router.public';

type Props = {};

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <PublicRouter />
      {/* <ProtectedRouter /> */}
    </ThemeProvider>
  );
};
