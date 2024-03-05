import React from 'react';
import SideBar from './SideBar';
import Navigation from './Navigation';

interface AngleLayoutProps {
  SidebarHeader?: string | number | JSX.Element;
  children: (string | number | JSX.Element) | (string | number | JSX.Element)[];
}

const AngleLayout = ({ SidebarHeader, children }: AngleLayoutProps): JSX.Element => {
  return (
    <div className="flex">
      <SideBar Header={SidebarHeader} />
      <div className="min-h-screen grow bg-[#f5f5f5]">
        <Navigation />
        <div className="dashboard-view p-16 max-md:px-8">{children}</div>
      </div>
    </div>
  );
};

export default AngleLayout;
