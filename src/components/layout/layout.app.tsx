import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'theme-ui';
// import BreadCrumbs from 'components/breadcrumbs/breadcrumbs';
import Header from 'components/header';
import SubHeader from 'components/subHeader';

type PropTypes = {
  children?: React.ReactElement;
};

/**
 * App Layout
 * used for protected app pages
 */
const AppLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <>
      <div>
        <Header />
        <SubHeader />
        {/* <ul>
          <li>
            <Link sx={{ color: 'primary' }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link sx={{ color: 'primary' }} to="brands">
              Brands
            </Link>
          </li>
          <li>
            <Link sx={{ color: 'primary' }} to="users">
              Users
            </Link>
          </li>
        </ul> */}
      </div>
      {/* <BreadCrumbs /> */}
      <main>
        <Container px={8} py={8}>
          {props.children}
        </Container>
      </main>
      <div>App Page Footer</div>
    </>
  );
};

AppLayout.defaultProps = {};

export default AppLayout;
