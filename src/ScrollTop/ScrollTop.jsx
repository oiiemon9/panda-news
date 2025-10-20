import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const skipRouts = ['/category'];
    if (!pathname.includes(skipRouts)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollTop;
