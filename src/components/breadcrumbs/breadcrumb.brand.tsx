import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BreadCrumb } from './breadcrumb';

type PropTypes = {};

const BrandBreadCrumb: React.FC<PropTypes> = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BreadCrumb
            fragments={[
              {
                path: '/brands',
                name: 'Brands',
              },
            ]}
          />
        }
      />
      <Route
        path="add"
        element={
          <BreadCrumb
            fragments={[
              { path: '/brands', name: 'Brands' },
              { path: '/brands/add', name: 'Add New Brand' },
            ]}
          />
        }
      />
      <Route
        path=":slug"
        element={
          <BreadCrumb
            fragments={[
              { path: '/brands', name: 'Brands' },
              {
                path: '/brands/:slug',
                name: 'Edit Brand',
                params: [
                  {
                    name: 'slug',
                    value: '',
                  },
                ],
              },
            ]}
          />
        }
      />
    </Routes>
  );
};

export default BrandBreadCrumb;
