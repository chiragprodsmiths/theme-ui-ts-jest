import * as React from 'react';

import { Link } from 'react-router-dom';

type PropTypes = {};

/**
 * Brands Page
 */
const Brands: React.FC<PropTypes> = () => {
  return (
    <div>
      <h1>Brands Listing Page</h1>
      <ul>
        <li>
          <Link to="add-new-brand">Add New Brand</Link>
        </li>
      </ul>
      <h2>Click below to edit brands</h2>
      <ul>
        {[...Array(10).keys()].map((key: number) => (
          <li key={String(key)}>
            <Link to={`arthify_${key}`} state={{ name: `arthify-name_${key}` }}>
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
