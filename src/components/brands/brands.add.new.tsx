import React from 'react';
import { Link } from 'react-router-dom';

type PropTypes = {};

const AddNewBrand: React.FC<PropTypes> = () => {
  return <Link to="/brands/add-new-brand" />;
};

export default AddNewBrand;
