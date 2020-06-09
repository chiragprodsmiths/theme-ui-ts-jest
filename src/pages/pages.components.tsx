import * as React from 'react';

// theme ui
import { Box, Input, Label, Text } from 'theme-ui';
import Select from 'components/select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

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
      <Box variant="inputWrap">
        {/* <Select options={options} placeholder="Select option" /> */}
        <Select />
      </Box>
      <Box variant="inputWrap">
        {/* <Select options={options} placeholder="Select with error" error /> */}
        <Select />
        <Text id="inputErrorError" variant="inputError">
          Error Message
        </Text>
      </Box>
    </Box>
  );
};

export default AllComponents;
