import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollSave = () => {
  const location = useLocation();
  useEffect(() => {
    const savedY = sessionStorage.getItem(location.pathname);
    if (savedY !== null) {
      window.scrollTo(0, parseInt(savedY));
    }
    return () => {
      sessionStorage.setItem(location.pathname, window.scrollY);
    };
  }, [location.pathname]);
};

export default useScrollSave;
