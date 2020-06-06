import React from 'react';
/**
 * Theme UI Component
 */
import { Box, Flex, Heading, Close } from 'theme-ui';

type PropTypes = {
  children?: React.ReactElement | any;
  // TODO:// @chirag chec onclose type
  onClose?: any;
  visible: boolean;
  title: string;
};

export const Modal: React.FC<PropTypes> = (props: PropTypes) => {
  const { children, onClose, visible, title } = props;
  return (
    <>
      {visible && (
        <Flex variant="modal">
          <Box variant="modalOverlay" onClick={onClose} />
          <Box variant="modalBody">
            <Flex pb={6} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              {title !== '' && <Heading as="h3">{title}</Heading>}
              <Close onClick={onClose} />
            </Flex>
            {children}
          </Box>
        </Flex>
      )}
    </>
  );
};

Modal.defaultProps = {
  visible: false,
  title: '',
};

export default Modal;
