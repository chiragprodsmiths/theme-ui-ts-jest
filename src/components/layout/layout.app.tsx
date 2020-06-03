/** @jsx jsx */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useColorMode, jsx, Button } from 'theme-ui';
import BreadCrumbs from 'components/breadcrumbs/breadcrumbs';
import { EnumButtonVariatns } from 'theme/theme.variants.buttons';

type PropTypes = {
  children?: React.ReactElement;
};

/**
 * App Layout
 * used for protected app pages
 */
const AppLayout: React.FC<PropTypes> = (props: PropTypes) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <div>
        App Page Header
        <ul>
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
        </ul>
      </div>
      <div>
        <BreadCrumbs />
      </div>
      <div>{props.children}</div>
      <Button
        variant={EnumButtonVariatns.PRIMARY}
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}>
        Change Mode
      </Button>
      <div>App Page Footer</div>
    </div>
  );
};

AppLayout.defaultProps = {};

export default AppLayout;
