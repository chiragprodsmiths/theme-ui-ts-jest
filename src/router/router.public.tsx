import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
/**
 * app components
 */
import { AuthContext } from 'components/auth/auth.provider';
import PublicLayout from 'components/layout/layout.public';
import Login from 'pages/pages.login';
import { PublicRouteProps, LocationState, RouterProps } from './router.types';

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */
const PublicRoute: React.FC<PublicRouteProps> = (props: PublicRouteProps) => {
  // get route state if any
  const { state } = useLocation() as LocationState;

  // check if authenticated => auth context
  const { authenticated } = useContext(AuthContext);

  // if authenticated redirect to protected route
  if (authenticated) {
    let redirectUrl = '/';
    if (state && state !== null && state.redirect) {
      redirectUrl = state.redirect;
    }
    return <Navigate to={redirectUrl} replace />;
  }

  // if not authenticated return public route
  return <PublicLayout>{props.element}</PublicLayout>;
};

const PublicRouter: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="login" element={<PublicRoute element={<Login />} />} />
      <Route path="signup" element={<PublicRoute element={<Login />} />} />
    </Routes>
  );
};

export default PublicRouter;
