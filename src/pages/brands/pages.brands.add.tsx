import * as React from 'react';
import { IconButton, Text, Flex, Box, Grid, Card, Link } from 'theme-ui';
import OverflowIcon from 'components/icons/icon.overflow';

type PropTypes = {};

/**
 * Add New Brand Page
 */
const AddBrand: React.FC<PropTypes> = () => {
  return (
    <>
      <Grid gap={3} columns={[2, '2fr 8fr']}>
        <Box>
          <Card mt="5">
            <Box>
              <Link variant="sidebarActive" href="/">
                Update Details
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Update People
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Update Parameters
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Manage Documents
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Manage Credit line
              </Link>
            </Box>
          </Card>
          <Card mt="15">
            <Box>
              <Text sx={{ lineHeight: '40px', color: 'textLight' }}>Review</Text>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Sub-Company List
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Offers List
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Deliveries List
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Active Contracts
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Lists
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Closure List
              </Link>
            </Box>
            <Box>
              <Link variant="sidebar" href="/">
                Archived List
              </Link>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card
            bg="white"
            sx={{
              borderRadius: 'default',
              border: '1px solid',
              borderColor: 'border',
              lineHeight: 'normal',
            }}>
            <Flex
              sx={{
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'border',
                px: 6,
                py: 4,
                alignItems: 'center',
                fontFamily: 'IBMPlexSansMedium',
              }}>
              <Box>
                <Text color="primary" sx={{ fontSize: 3 }}>
                  Customer ID 198433
                </Text>
              </Box>
              <Box>
                <Flex
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text sx={{ fontSize: 1 }}>Last modified : Fabrizio, 14 Feb 2020</Text>
                  <IconButton>
                    <OverflowIcon sx={{ ml: 4 }} />
                  </IconButton>
                </Flex>
              </Box>
            </Flex>
            <Flex
              sx={{
                px: 6,
                py: 4,
              }}>
              <Box>
                <Text>Dramation Anthrologics, Zurich, CH </Text>
                <Text>Raymond Schwarz (Logistics & Services Manager) </Text>
                <Text>fleetmanager@dramationathro.com | +41 24322 42324</Text>
              </Box>
              <Box pl="15">
                <Text as="span">
                  Sub-Customer :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    3
                  </Text>
                </Text>
                <Text>
                  Cost-Centers :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    2
                  </Text>
                </Text>
                <Text>
                  Drivers :{' '}
                  <Text as="span" sx={{ color: 'link' }}>
                    18
                  </Text>
                </Text>
              </Box>
              <Box pl="15">
                <Text>Mercedes-Benz C-Class 20 </Text>
                <Text>120,000kms / 36 months </Text>
                <Text>TCO: $892p.m.</Text>
              </Box>
            </Flex>
          </Card>
          <Card
            bg="white"
            sx={{
              borderRadius: 'default',
              border: '1px solid',
              borderColor: 'border',
              mt: 8,
            }}>
            <Flex
              sx={{
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'border',
                px: 6,
                py: 4,
              }}>
              <Box>
                <Text sx={{ fontSize: 3, fontFamily: 'IBMPlexSansMedium' }}>Update Details</Text>
              </Box>
            </Flex>
            <Box px="12" pt="10" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="">
                  <Grid gap={10} columns={[2, '7fr 3fr']}>
                    <Box variant="inputWrap" />
                    <Box variant="inputWrap" />
                  </Grid>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
            </Box>
            <Box px="12" pt="10" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
              <Text mb="6" sx={{ fontWeight: 'medium' }}>
                Address
              </Text>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap" />
                <Box variant="inputWrap" />
              </Grid>
            </Box>
          </Card>
        </Box>
      </Grid>
      <h1>Add New Brand Page</h1>
    </>
  );
};

export default AddBrand;
