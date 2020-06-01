import * as React from 'react';

import Login from 'components/login';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
    </div>
  );
};

export default Home;
