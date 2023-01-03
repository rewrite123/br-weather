import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Please do not adjust this component
 * Sorry, TypeScript demands blood
 */
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      {props.children}
      <Outlet />
    </>
  );
};

export default Layout;
