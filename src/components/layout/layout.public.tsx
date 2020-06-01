import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

type PropTypes = {};

/**
 * Public layout
 * used for public pages
 */
const PublicLayout: React.FC<PropTypes> = () => {
  return (
    <div>
      <div>
        Public Page Header
        <div>
          <Link to="login">Login</Link>
          <Link to="signup">Sign up</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>Public Page Footer</div>
    </div>
  );
};

PublicLayout.defaultProps = {};

export default PublicLayout;
