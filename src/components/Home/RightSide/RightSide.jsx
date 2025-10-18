import React from 'react';
import SideLogin from './SideLogin/SideLogin';
import FindUs from './FindUs/FindUs';
import QZone from './QZone/QZone';

const RightSide = () => {
  return (
    <aside className="space-y-10">
      <SideLogin></SideLogin>
      <FindUs></FindUs>
      <QZone></QZone>
    </aside>
  );
};

export default RightSide;
