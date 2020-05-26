import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/pages.home';
import Dashboard from 'pages/pages.dashboard';
import NotFound from 'pages/pages.404';

export type RouterProps = {};

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

export const AllRoutes: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="/404-not-found" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
