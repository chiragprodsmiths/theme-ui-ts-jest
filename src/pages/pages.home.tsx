import * as React from 'react';
import Todos from 'components/examples/Todos';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Todos />
    </div>
  );
};

export default Home;
