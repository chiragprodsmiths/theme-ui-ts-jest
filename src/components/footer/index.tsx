import * as React from 'react';
import { Flex, Text } from 'theme-ui';

type PropTypes = {};

/**
 * Public layout
 * used for public pages
 */
const Footer: React.FC<PropTypes> = () => {
  return (
    <footer>
      <Flex variant="footer">
        <Text>© 2020 FleetManagement | Send feedback</Text>
      </Flex>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
