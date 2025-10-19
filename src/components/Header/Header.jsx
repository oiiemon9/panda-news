import React, { use, useEffect, useState } from 'react';
import logoimg from '../../assets/logo.png';
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';
import { useLocation } from 'react-router';
import { AuthContext } from '../AuthenticationContext/AuthenticationContext';

const Header = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/news/');
  const [newsError, setNewsError] = useState('');
  const [brakingTitle, setBrakingTitle] = useState([]);
  useEffect(() => {
    const newsTitle = async () => {
      try {
        const data = await fetch(
          'https://openapi.programming-hero.com/api/news/category/01'
        );
        const dataJson = await data.json();
        const titleArray = dataJson?.data.map((news) => news.title);
        setBrakingTitle(titleArray);
      } catch (error) {
        setNewsError(error.message);
      }
    };
    newsTitle();
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-2 mt-12 flex flex-col items-center gap-3">
      <div>
        <img src={logoimg} alt="" />
      </div>
      <p className="text-base-200">Journalism Without Fear or Favour</p>

      <h6 className="text-base-300">
        {format(new Date(), 'EEEE , MMMM dd , yyyy')}
      </h6>
      {hideNavbar || (
        <div className="w-full bg-gray-100 p-4 flex items-center  gap-2">
          <p className="btn btn-secondary">Latest</p>
          <div>
            <Marquee speed={50}>
              <p>{brakingTitle.map((title) => title)}</p>
            </Marquee>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
