import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BreadCrumb } from './breadcrumb';
import BrandBreadCrumb from './breadcrumb.brand';

type PropTypes = {};

const BreadCrumbs: React.FC<PropTypes> = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BreadCrumb
              fragments={[
                {
                  path: '/',
                  name: 'Home',
                },
              ]}
              root
            />
          }
        />
        <Route path="brands/*" element={<BrandBreadCrumb />} />
      </Routes>
    </>
  );
};

export default BreadCrumbs;
