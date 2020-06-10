import * as React from 'react';

// theme ui
import { Box, Input, Label, Text } from 'theme-ui';

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
    </Box>
  );
};

export default AllComponents;
