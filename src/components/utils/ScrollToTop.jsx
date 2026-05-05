import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Can be 'smooth' if you prefer, but 'instant' feels more like native navigation
    });
  }, [pathname]);

  return null;
}
