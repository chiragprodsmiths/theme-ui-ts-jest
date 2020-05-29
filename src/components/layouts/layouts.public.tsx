import * as React from 'react';
import { Box, Flex } from 'theme-ui';
import { Link } from 'react-router-dom';

type PropTypes = {
  children?: React.ReactNode;
};

const PublicLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <Box>
      <Box>
        Header
        <Flex sx={{ justifyContent: 'space-evenly' }}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </Flex>
      </Box>
      <Box>{props.children}</Box>
      <Box>Page Footer</Box>
    </Box>
  );
};

export default PublicLayout;
