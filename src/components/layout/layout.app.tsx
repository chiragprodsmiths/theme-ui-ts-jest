import * as React from 'react';
/**
 * Theme UI Components
 */
import { Link, Card, IconButton, Container, Flex, Image, Box, Text, Heading } from 'theme-ui';
/**
 * Custom Components
 */
import BrandIcon from 'components/icons/icon.brand';
import ChevronDown from 'components/icons/icon.chevronDown';
import DocumentIcon from 'components/icons/icon.document';
import ReportIcon from 'components/icons/icon.report';
import UserIcon from 'components/icons/icon.user';
// import BreadCrumbs from 'components/breadcrumbs/breadcrumbs';

/**
 * Images
 */
import logo from 'images/logo.png';

type PropTypes = {
  children?: React.ReactElement;
};

/**
 * App Layout
 * used for protected app pages
 */
const AppLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <>
      <header>
        <Container px={8} bg="white" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
          <Flex
            sx={{
              minHeight: 68,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Image src={logo} variant="logo" />
                <Text
                  sx={{
                    fontWeight: 'semiBold',
                    color: 'logoText',
                  }}>
                  BRAND LOGO
                </Text>
              </Flex>
            </Box>
            <Box>
              <IconButton>
                Sales Manager
                <UserIcon sx={{ ml: 2 }} />
              </IconButton>
            </Box>
          </Flex>
        </Container>
      </header>
      <Container px={8} bg="subHeader" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
        <Flex sx={{ alignItems: 'center', py: 4 }}>
          <Box sx={{ width: '70%' }}>
            <Heading as="h4" sx={{ color: 'textLight' }}>
              Dashboards
            </Heading>
          </Box>
          <Box sx={{ width: '30%', textAlign: 'right' }}>
            <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <IconButton>
                  <BrandIcon sx={{ mr: 2 }} />
                  Brand
                  <ChevronDown sx={{ ml: 2 }} />
                </IconButton>
                <Card variant="popover">
                  <Link variant="popoverListItem" href="/">
                    Deutsche Telekom
                  </Link>
                  <Link variant="popoverListItemActive" href="/">
                    Bayerische Motoren Werke
                  </Link>
                  <Link variant="popoverListItem" href="/">
                    Bosch
                  </Link>
                  <Link variant="popoverListItem" href="/">
                    Sparkassen-Finanzgruppe
                  </Link>
                </Card>
              </Box>
              <Box>
                <Flex>
                  <Link href="/docs" sx={{ pr: 9 }}>
                    <IconButton variant="iconLink">
                      <DocumentIcon sx={{ mr: 2 }} /> Docs
                    </IconButton>
                  </Link>
                  <Link href="/report">
                    <IconButton variant="iconLink">
                      <ReportIcon sx={{ mr: 2 }} /> Report
                    </IconButton>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
      {/* <BreadCrumbs /> */}
      <main>
        <Container px={8} py={8}>
          {props.children}
        </Container>
      </main>
      <footer>
        <Flex variant="footer">
          <Text>© 2020 FleetManagement | Send feedback</Text>
        </Flex>
      </footer>
    </>
  );
};

AppLayout.defaultProps = {};

export default AppLayout;
