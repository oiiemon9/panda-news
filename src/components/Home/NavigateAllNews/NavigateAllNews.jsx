import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';

const NavigateAllNews = ({ children }) => {
  const navigate = useLocation();

  if (navigate.pathname === '/') {
    return <Navigate to={'/category/01'}></Navigate>;
  }
  return children;
};

export default NavigateAllNews;
