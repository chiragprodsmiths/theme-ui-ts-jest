import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'pages/pages.404';
import PublicLayout from 'components/layout/layout.public';
import Login from 'pages/pages.login';

type RouterProps = {};

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

const PublicRouter: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
