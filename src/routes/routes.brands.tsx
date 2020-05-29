import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pages from 'pages';

export type PropTypes = {};

/**
 * Brand Pages Relative Routes
 */

export const BrandPages: React.FC<PropTypes> = () => {
  return (
    <Routes>
      <Route path="add-brand" element={<Pages.Brands.AddBrand />} />
    </Routes>
  );
};

export default BrandPages;
