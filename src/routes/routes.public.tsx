import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pages from 'pages';

type RouterProps = {};

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

const PublicRoutes: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="login" element={<Pages.Login />} />
      <Route path="signup" element={<Pages.Login />} />
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
