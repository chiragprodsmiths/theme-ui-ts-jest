import * as React from 'react';
import { IconButton, Container, Flex, Image, Box, Text } from 'theme-ui';
import UserIcon from 'components/icons/icon.user';
import logo from 'images/logo.png';

type PropTypes = {};

/**
 * Public layout
 * used for public pages
 */
const Header: React.FC<PropTypes> = () => {
  return (
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
  );
};

Header.defaultProps = {};

export default Header;
