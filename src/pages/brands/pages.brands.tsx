import * as React from 'react';
import { Box, Flex } from 'theme-ui';
import { Link, Outlet } from 'react-router-dom';

type PropTypes = {};

/**
 * Brands Page
 */
const Brands: React.FC<PropTypes> = () => {
  return (
    <Box>
      <h1>Brands Page</h1>
      <Flex sx={{ justifyContent: 'space-evenly' }}>
        <Link to="add-brand">Add Brand</Link>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Brands;
