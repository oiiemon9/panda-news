import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png';
import { AuthContext } from '../AuthenticationContext/AuthenticationContext';

const NavBar = () => {
  const { user, logout, setUser, authLoader } = use(AuthContext);

  const handelLogout = () => {
    logout();
  };
  return (
    <nav className="max-w-[1440px] mx-auto px-2 grid md:grid-cols-3 gap-10 mt-5 md:h-14 items-center">
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
      {authLoader ? (
        ''
      ) : (
        <div className="flex items-center justify-center md:justify-end gap-4">
          <div className="w-12 h-12">
            <img
              className=" w-full h-full rounded-full object-cover"
              src={user ? user?.photoURL : userImg}
              alt=""
            />
          </div>

          {user ? (
            <button onClick={handelLogout} className="btn btn-secondary">
              Log out
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
