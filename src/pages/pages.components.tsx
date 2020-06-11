import * as React from 'react';

// theme ui
import { IconButton, Box, Input, Label, Text } from 'theme-ui';
import AddIcon from 'components/icons/icon.add';
import SubtractIcon from 'components/icons/icon.subtract';
import { CustomVariants } from 'theme/theme.variants';

type PropTypes = {};

/**
 * Login Page
 */
const AllComponents: React.FC<PropTypes> = () => {
  return (
    <Box>
      <Box variant="inputWrap">
        <Input
          variant="input"
          id="inputName"
          type="input"
          name="inputName"
          placeholder="Input"
          autoComplete="inputName"
          autoFocus
        />
        <Label htmlFor="input">Input</Label>
      </Box>
      <Box variant="inputWrap">
        <Input
          variant="inputError"
          id="inputError"
          name="userName"
          placeholder="Input With Error"
          autoComplete="inputError"
          autoFocus
        />
        <Label htmlFor="inputError">Input With Error</Label>
        <Text id="inputErrorError" variant="inputError">
          Error Message
        </Text>
      </Box>
      <Box variant={CustomVariants.INPUT_WRAP}>
        <IconButton>
          <AddIcon sx={{ mr: 2 }} />{' '}
          <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
            Add another Address
          </Text>
        </IconButton>
        <IconButton ml="8">
          <SubtractIcon sx={{ mr: 2 }} />
          <Text as="span" color="link" sx={{ fontFamily: 'IBMPlexSansMedium' }}>
            Remove
          </Text>
        </IconButton>
      </Box>
    </Box>
  );
};

export default AllComponents;
