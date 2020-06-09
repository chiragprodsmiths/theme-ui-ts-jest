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
              <Heading as="h3">Manage Users</Heading>
            </Flex>
            {/* collapse body / sections */}
            <AddBrandForm />
            {/* <Box variant={CustomVariants.COLLAPSE_SECTION}>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Select options={options} placeholder="Select brand" />
                </Box>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Select options={options} placeholder="Parent Company" />
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="customerName"
                    name="Customer Name"
                    placeholder="Customer Name"
                    autoComplete="customerName"
                    autoFocus
                    aria-describedby="userNameError"
                  />
                  <Label htmlFor="customerName">Customer Name</Label>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="language"
                    name="language"
                    placeholder="language"
                    autoComplete="language"
                    autoFocus
                    aria-describedby="languageError"
                  />
                  <Label htmlFor="language">Language</Label>
                </Box>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="currency"
                    name="currency"
                    placeholder="currency"
                    autoComplete="currency"
                    autoFocus
                    aria-describedby="currencyError"
                  />
                  <Label htmlFor="currency">Currency</Label>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="orgEmail"
                    type="email"
                    name="orgEmail"
                    placeholder="Org email"
                    autoComplete="orgEmail"
                    autoFocus
                    aria-describedby="orgEmailError"
                  />
                  <Label htmlFor="orgEmail">Org email</Label>
                </Box>
                <Box variant="">
                  <Grid gap={10} columns={[2, '7fr 3fr']}>
                    <Box variant={CustomVariants.INPUT_WRAP}>
                      <Input
                        variant={EnumInputVariants.INPUT}
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        autoComplete="phone"
                        autoFocus
                        aria-describedby="phoneError"
                      />
                      <Label htmlFor="phone">Phone</Label>
                    </Box>
                    <Box variant={CustomVariants.INPUT_WRAP}>
                      <Input
                        variant={EnumInputVariants.INPUT}
                        id="ext"
                        name="userName"
                        placeholder="Ext"
                        autoComplete="ext"
                        autoFocus
                        aria-describedby="extError"
                      />
                      <Label htmlFor="ext">Ext</Label>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="fax"
                    name="userName"
                    placeholder="Fax"
                    autoComplete="fax"
                    autoFocus
                    aria-describedby="faxError"
                  />
                  <Label htmlFor="fax">Fax</Label>
                </Box>
              </Grid>
            </Box>
            <Box variant={CustomVariants.COLLAPSE_SECTION}>
              <Text mb="6" sx={{ fontWeight: 'medium' }}>
                Address
              </Text>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="to"
                    name="userName"
                    placeholder="To"
                    autoComplete="to"
                    autoFocus
                    aria-describedby="toError"
                  />
                  <Label htmlFor="to">To</Label>
                </Box>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="street"
                    name="street"
                    placeholder="Street"
                    autoComplete="street"
                    autoFocus
                    aria-describedby="streetError"
                  />
                  <Label htmlFor="street">Street</Label>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="city"
                    name="city"
                    placeholder="City"
                    autoComplete="city"
                    autoFocus
                    aria-describedby="cityError"
                  />
                  <Label htmlFor="city">City</Label>
                </Box>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="country"
                    name="country"
                    placeholder="Country"
                    autoComplete="country"
                    autoFocus
                    aria-describedby="countryError"
                  />
                  <Label htmlFor="country">Country</Label>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant={CustomVariants.INPUT_WRAP}>
                  <Input
                    variant={EnumInputVariants.INPUT}
                    id="zip"
                    type="zip"
                    name="zip"
                    placeholder="Zip"
                    autoComplete="zip"
                    autoFocus
                    aria-describedby="userNameError"
                  />
                  <Label htmlFor="zip">Zip</Label>
                </Box>
              </Grid>
            </Box> */}
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default AddBrand;
