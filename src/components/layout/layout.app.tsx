import * as React from 'react';
import { Container } from 'theme-ui';
// import BreadCrumbs from 'components/breadcrumbs/breadcrumbs';
import Header from 'components/header';
import SubHeader from 'components/subHeader';
import Footer from 'components/footer';

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
      <Header />
      <SubHeader />
      {/* <BreadCrumbs /> */}
      <main>
        <Container px={8} py={8}>
          {props.children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

AppLayout.defaultProps = {};

export default AppLayout;
