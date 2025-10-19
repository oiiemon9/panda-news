import React, { use } from 'react';
import { AuthContext } from '../components/AuthenticationContext/AuthenticationContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {
  const { user, authLoader } = use(AuthContext);
  const location = useLocation();
  console.log(authLoader);

  if (authLoader) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivetRoute;
