import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from 'components/auth/auth.provider';
import AppLayout from 'components/layout/layout.app';
import Home from 'pages/pages.home';
import AllComponents from 'pages/pages.components';
import BrandRouter from './router.brand';

type PropTypes = {};

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

type ProtectedRouteProps = {
  element: React.ReactElement;
};

const PublicRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  const { authenticated } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  // if not authenticated redirect to login
  if (!authenticated) return <Navigate to="/login" replace state={{ redirect: `${pathname}${search}` }} />;

  // else render route
  return <AppLayout>{props.element}</AppLayout>;
};

const ProtectedRouter: React.FC<PropTypes> = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute element={<Home />} />} />
      <Route path="brands/*" element={<PublicRoute element={<BrandRouter />} />} />
      <Route path="components" element={<AllComponents />} />
    </Routes>
  );
};

export default ProtectedRouter;
