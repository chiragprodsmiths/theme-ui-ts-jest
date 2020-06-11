import * as React from 'react';
import { Flex, Box, Text, Input, Button } from 'theme-ui';
// import { Link } from 'react-router-dom';

type PropTypes = {};

/**
 * Brands Page
 */
const Brands: React.FC<PropTypes> = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Flex
            sx={{
              alignItems: 'baseline',
            }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>120</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Active Customers
            </Text>
          </Flex>
        </Box>
        <Box pl={22}>
          <Flex
            sx={{
              alignItems: 'baseline',
            }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>€56M</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Value
            </Text>
          </Flex>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <Flex
            sx={{
              alignItems: 'baseline',
            }}>
            <Text sx={{ fontSize: 6, fontFamily: 'light' }}>08</Text>
            <Text sx={{ pl: 1 }} color="textLight">
              Tasks Pending
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 5,
        }}>
        <Box>
          <Flex>
            <Box sx={{ width: 320 }}>
              <Input id="abc" placeholder="Search" required />
            </Box>
            <Box sx={{ width: 184 }} />
          </Flex>
        </Box>
        <Box>
          {/* TODO: @chirag component will come from brands page */}
          <Button>New Brand</Button>
        </Box>
      </Flex>
      <Flex mt="5" sx={{ justifyContent: 'flex-end' }}>
        {/* <Button variant="pagination" mr="3">
          History
        </Button> */}
        <Box variant="paginationWrap">
          <Button variant="pagination">
            <Box as="span" variant="paginationPrev">
              Prev
            </Box>
          </Button>
          <Button sx={{ bg: 'primary', color: 'white' }} variant="pagination">
            1
          </Button>
          <Button variant="pagination">2</Button>
          <Button variant="pagination">3</Button>
          <Button variant="pagination">4</Button>
          <Button variant="pagination">...</Button>
          <Button variant="pagination">25</Button>
          <Button variant="pagination">
            <Box as="span" variant="paginationNext">
              Next
            </Box>
          </Button>
        </Box>
      </Flex>
      {/* <ul>
        <li>
          <Link to="add">Add New Brand</Link>
        </li>
      </ul> */}
      {/* <h2>Click below to edit brands</h2>
      <ul>
        {[...Array(10).keys()].map((key: number) => (
          <li key={String(key)}>
            <Link to={`arthify_${key}`} state={{ name: `arthify-name_${key}` }}>
              {key}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Brands;
