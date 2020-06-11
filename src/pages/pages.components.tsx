import * as React from 'react';

// theme ui
import { Badge, Button, Box, Checkbox, Close, Input, Label, Radio, Text } from 'theme-ui';

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
      <Box variant="inputFileWrap">
        <Box variant="inputFileBox">
          <Input multiple id="uploadfile" type="file" placeholder="Brand Logo" variant="input" />
          <Label htmlFor="uploadfile">Upload File</Label>
          <Button variant="outline">Browse</Button>
        </Box>
        <Text variant="inputError" sx={{ color: 'textLight' }}>
          Only .jpg and .png, 2 Mb max file size
        </Text>
      </Box>
      <Box variant="inputFileWrap">
        <Box variant="inputFileBox">
          <Input multiple id="uploadfile2" type="file" placeholder="Brand Logo" variant="input" />
          <Label htmlFor="uploadfile2">Upload File</Label>
          <Button>Upload</Button>
          <Box variant="selectedFileWrap">
            <Badge variant="selectedFile">
              <Text variant="selectedFileText">Filename.png</Text>
              <Close sx={{ width: 20, height: 20, ml: 2 }} />
            </Badge>
            <Badge variant="selectedFile">
              <Text variant="selectedFileText">test.jpg</Text>
              <Close sx={{ width: 20, height: 20, ml: 2 }} />
            </Badge>
          </Box>
        </Box>
        <Text variant="inputError">File cannot exceed 2 Mb</Text>
      </Box>
      <Box variant="inputFileWrap">
        <Label sx={{ lineHeight: 'normal' }}>
          <Checkbox defaultChecked />
          Hello
        </Label>
      </Box>
      <Box variant="inputFileWrap">
        <Label sx={{ lineHeight: 'normal' }}>
          <Radio name="dark-mode" value="true" />
          Dark Mode
        </Label>
        <Label sx={{ lineHeight: 'normal' }}>
          <Radio name="dark-mode" value="false" />
          Light Mode
        </Label>
      </Box>
    </Box>
  );
};

export default AllComponents;
