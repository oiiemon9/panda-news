import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../../assets/user.png';

const NavBar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto px-2 grid grid-cols-3 gap-10 mt-5">
      <div></div>
      <div className=" flex justify-center">
        <ul className="flex gap-2 text-base-200">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div>
          <img src={userImg} alt="" />
        </div>
        <button className="btn btn-primary">login</button>
      </div>
    </nav>
  );
};

export default NavBar;
