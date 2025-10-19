import React, { use } from 'react';
import SideLogin from './SideLogin/SideLogin';
import FindUs from './FindUs/FindUs';
import QZone from './QZone/QZone';
import { AuthContext } from '../../AuthenticationContext/AuthenticationContext';

const RightSide = () => {
  const { registration, setUser, user, logout, authLoader } = use(AuthContext);
  return (
    <aside className="space-y-10">
      {authLoader ? '' : user ? '' : <SideLogin></SideLogin>}

      <FindUs></FindUs>
      <QZone></QZone>
    </aside>
  );
};

export default RightSide;
