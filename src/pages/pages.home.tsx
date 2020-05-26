import * as React from 'react';
import Todos from 'components/examples/Todos';
import { Link } from 'react-router-dom';

export type HomeProps = {};

/**
 * Home Page
 */
export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard">My Dashboard</Link>
      </nav>
      <Todos />
    </div>
  );
};

export default Home;
