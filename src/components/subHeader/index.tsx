import * as React from 'react';
import { Link, IconButton, Container, Flex, Box, Text } from 'theme-ui';
import BrandIcon from 'components/icons/icon.brand';
import ChevronDown from 'components/icons/icon.chevronDown';
import DocumentIcon from 'components/icons/icon.document';
import ReportIcon from 'components/icons/icon.report';

type PropTypes = {};

/**
 * Public layout
 * used for public pages
 */
const SubHeader: React.FC<PropTypes> = () => {
  return (
    <Container px={8} bg="subHeader" sx={{ borderBottom: '1px solid', borderColor: 'border' }}>
      <Flex sx={{ alignItems: 'center', py: 4 }}>
        <Box sx={{ width: '70%' }}>
          <Text sx={{ color: 'textLight' }}>Dashboard</Text>
        </Box>
        <Box sx={{ width: '30%', textAlign: 'right' }}>
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <IconButton>
                <BrandIcon sx={{ mr: 2 }} />
                Brand
                <ChevronDown sx={{ ml: 2 }} />
              </IconButton>
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
  );
};

SubHeader.defaultProps = {};

export default SubHeader;
