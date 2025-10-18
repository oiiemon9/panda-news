import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router';

const Root = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
