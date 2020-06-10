import * as React from 'react';
/**
 * Theme UI Components
 */
// import { Button, Textarea, IconButton, Text, Heading, Flex, Box, Grid, Card, Link, Input, Label } from 'theme-ui';
import { Button, Textarea, IconButton, Text, Heading, Flex, Box, Grid, Card, Link } from 'theme-ui';
/**
 * Components
 */
import OverflowIcon from 'components/icons/icon.overflow';
import AddBrandForm from 'components/brands/brands.add';
/**
 * Variants
 */
import { CustomVariants } from 'theme/theme.variants';
import { EnumLinksVariants } from 'theme/theme.variants.links';
import { EnumCardsVariants } from 'theme/theme.variants.cards';

type PropTypes = {};

/**
 * Add New Brand Page
 */
const AddBrand: React.FC<PropTypes> = () => {
  return (
    <>
      <Grid gap={4} columns={[2, '2fr 8fr']}>
        {/* Left Sidebar */}
        <Box>
          <Card mt="5">
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR_ACTIVE} href="/">
                Manage Brands
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Brand User
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Customer User
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Manage Master Files
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Schedule Processes
              </Link>
            </Box>
          </Card>
          {/* Review Links */}
          <Card mt="15">
            <Box>
              <Text sx={{ lineHeight: '40px', color: 'textLight' }}>Review</Text>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Brand Update History
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Users Update History
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Master Files Update History
              </Link>
            </Box>
            <Box>
              <Link variant={EnumLinksVariants.SIDEBAR} href="/">
                Process History
              </Link>
            </Box>
          </Card>
          {/* Notes Section */}
          <Card mt="8">
            <Text sx={{ fontSize: 3, color: 'textLight' }}>Notes</Text>
            <Textarea rows={3} mt="3" />
            <Button mt="4" sx={{ minWidth: '112px' }}>
              Save
            </Button>
          </Card>
        </Box>
        <Box>
          {/* Overview Section */}
          <Card variant={EnumCardsVariants.COLLAPSE}>
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
          {/* Manage Users */}
          <Card variant={EnumCardsVariants.COLLAPSE}>
            {/* collapse title */}
            <Flex variant={CustomVariants.COLLAPSE_HEADER}>
              <Heading as="h3">Manage Brands</Heading>
            </Flex>
            {/* Add Brand Form */}
            <AddBrandForm />
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default AddBrand;
