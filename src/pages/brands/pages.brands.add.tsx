import * as React from 'react';
import { Button, Textarea, IconButton, Text, Flex, Box, Grid, Card, Link, Input, Label } from 'theme-ui';
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
          <Card mt="8">
            <Text sx={{ fontSize: 3, color: 'textLight' }}>Notes</Text>
            <Textarea rows={3} mt="3" />
            <Button mt="4" sx={{ minWidth: '112px' }}>
              Save
            </Button>
          </Card>
        </Box>
        <Box>
          <Card
            bg="white"
            sx={{
              borderRadius: 'default',
              border: '1px solid',
              borderColor: 'border',
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
                    id="brand"
                    name="brand"
                    placeholder="Brand"
                    autoComplete="brand"
                    autoFocus
                    aria-describedby="brandError"
                  />
                  <Label htmlFor="brand">Email</Label>
                </Box>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
                    id="parentCompany"
                    name="parentCompany"
                    placeholder="Parent Company"
                    autoComplete="parentCompany"
                    autoFocus
                    aria-describedby="userNameError"
                  />
                  <Label htmlFor="parentCompany">Parent Company</Label>
                </Box>
              </Grid>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
                    id="language"
                    name="language"
                    placeholder="language"
                    autoComplete="language"
                    autoFocus
                    aria-describedby="languageError"
                  />
                  <Label htmlFor="language">Language</Label>
                </Box>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
                    <Box variant="inputWrap">
                      <Input
                        variant="input"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        autoComplete="phone"
                        autoFocus
                        aria-describedby="phoneError"
                      />
                      <Label htmlFor="phone">Phone</Label>
                    </Box>
                    <Box variant="inputWrap">
                      <Input
                        variant="input"
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
            <Box px="12" pt="10" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
              <Text mb="6" sx={{ fontWeight: 'medium' }}>
                Address
              </Text>
              <Grid gap={10} columns={[2, null, 3]}>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
                    id="to"
                    name="userName"
                    placeholder="To"
                    autoComplete="to"
                    autoFocus
                    aria-describedby="toError"
                  />
                  <Label htmlFor="to">To</Label>
                </Box>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
                    id="city"
                    name="city"
                    placeholder="City"
                    autoComplete="city"
                    autoFocus
                    aria-describedby="cityError"
                  />
                  <Label htmlFor="city">City</Label>
                </Box>
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
                <Box variant="inputWrap">
                  <Input
                    variant="input"
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
            </Box>
          </Card>
        </Box>
      </Grid>
      <h1>Add New Brand Page</h1>
    </>
  );
};

export default AddBrand;
