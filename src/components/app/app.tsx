import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';
import AllRoutes from 'routes';
import Layouts from 'components/layouts';

export type Props = {};

export const App: React.FC<Props> = () => {
  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  console.log(setAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      {authenticated && (
        <Layouts.AppLayout>
          <AllRoutes.ProtectedRoutes />
        </Layouts.AppLayout>
      )}
      {!authenticated && (
        <Layouts.PublicLayout>
          <AllRoutes.PublicRoutes />
        </Layouts.PublicLayout>
      )}
    </ThemeProvider>
  );
};
