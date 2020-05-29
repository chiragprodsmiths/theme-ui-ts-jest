import * as React from 'react';
import Todos from 'components/examples/Todos';
import { Box } from 'theme-ui';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <Box>
      <h1>Home Page</h1>
      <Todos />
    </Box>
  );
};

export default Home;