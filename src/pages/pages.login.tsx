import * as React from 'react';
import { Box } from 'theme-ui';
import Login from 'components/login';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <Box>
      <h1>Login Page</h1>
      <Login />
    </Box>
  );
};

export default Home;
