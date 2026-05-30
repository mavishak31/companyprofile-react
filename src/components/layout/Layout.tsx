import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className='bg-white dark:bg-black min-h-screen transition-colors duration-300 overflow-hidden'>
      {children}
    </div>
  );
};

export default Layout;
