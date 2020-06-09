import * as React from 'react';

type PropTypes = {
  children: React.ReactElement;
};

/**
 * Public layout
 * used for public pages
 */
const PublicLayout: React.FC<PropTypes> = (props: PropTypes) => {
  return <main>{props.children}</main>;
};

PublicLayout.defaultProps = {};

export default PublicLayout;
