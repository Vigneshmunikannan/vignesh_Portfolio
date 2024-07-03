import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // useEffect(() => {
  //   // This function will run whenever location changes
  //   console.log('Location changed:', location.pathname);
  // }, [location]); // Dependency array ensures useEffect runs on location change

  return (
    <>
      {isHome ? <Navbar /> : <Navbar2 />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
