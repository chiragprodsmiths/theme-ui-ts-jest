import * as React from 'react';
import { Box, Flex } from 'theme-ui';
import { Link } from 'react-router-dom';

type PropTypes = {
  children?: React.ReactNode;
};

const AppLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <Box>
      <Box>
        Header
        <Flex sx={{ justifyContent: 'space-evenly' }}>
          <Link to="/">Home</Link>
          <Link to="brands">Brands</Link>
          <Link to="users">Users</Link>
          <Link to="login">Login</Link>
        </Flex>
      </Box>
      <Box>Page Sub Header</Box>
      <Box>{props.children}</Box>
      <Box>Page Footer</Box>
    </Box>
  );
};

export default AppLayout;
