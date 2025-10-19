import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router';

const Root = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/news/');
  return (
    <div>
      {location.pathname === '/login' ||
      location.pathname === '/registration' ? (
        ''
      ) : (
        <Header></Header>
      )}
      {hideNavbar || <NavBar></NavBar>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
