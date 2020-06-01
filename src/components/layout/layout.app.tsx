import * as React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from 'components/breadcrumbs/breadcrumbs';

type PropTypes = {
  children?: React.ReactElement;
};

/**
 * App Layout
 * used for protected app pages
 */
const AppLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <div>
      <div>
        App Page Header
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="brands">Brands</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
        </ul>
      </div>
      <div>
        <BreadCrumbs />
      </div>
      <div>{props.children}</div>
      <div>App Page Footer</div>
    </div>
  );
};

AppLayout.defaultProps = {};

export default AppLayout;
