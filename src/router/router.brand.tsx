import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrandPages from 'pages/brands';
import BrandsLayout from 'components/layout/layout.brand.';

type PropTypes = {};

/**
 * Brand Router
 * brand index & relative routes
 */

const BrandRouter: React.FC<PropTypes> = () => {
  return (
    <BrandsLayout>
      <Routes>
        <Route path="/" element={<BrandPages.Brands />} />
        <Route path="add-new-brand" element={<BrandPages.AddBrand />} />
        <Route path=":slug" element={<BrandPages.EditBrand />} />
      </Routes>
    </BrandsLayout>
  );
};

export default BrandRouter;
