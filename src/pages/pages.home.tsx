import * as React from 'react';
import Todos from 'components/examples/Todos';
import { Image } from 'theme-ui';
import arrow from 'images/arrow-down.svg';

type PropTypes = {};

/**
 * Home Page
 */
const Home: React.FC<PropTypes> = () => {
  return (
    <div>
      <Image src={arrow} />
      <h1>Home Page</h1>
      <Todos />
    </div>
  );
};

export default Home;
