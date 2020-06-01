import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'pages/pages.404';
import AppLayout from 'components/layout/layout.app';
import Home from 'pages/pages.home';
import BrandRouter from './router.brand';

type PropTypes = {};

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

const ProtectedRouter: React.FC<PropTypes> = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="brands/*" element={<BrandRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
};

export default ProtectedRouter;
