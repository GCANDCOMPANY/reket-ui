import React, { useEffect } from 'react';
import { throttle } from 'lodash';
import { useRecoilState } from 'recoil';
import app from 'src/recoils/app';
import Menu, { MenuElement } from './Menu';

interface SideBarProps {
  Header?: string | number | JSX.Element;
  menuList?: MenuElement[];
}

const SideBar = ({ Header, menuList }: SideBarProps) => {
  const [isSidebarOpen, setIsSideBarOpen] = useRecoilState(app.sidebarOpen);

  useEffect(() => {
    const resizeMethod = throttle(() => {
      if (document.body.clientWidth <= 768) setIsSideBarOpen(false);
      else setIsSideBarOpen(true);
    }, 100);
    window.addEventListener('resize', resizeMethod);

    resizeMethod();
    return () => {
      window.removeEventListener('resize', resizeMethod);
    };
  }, [document.body.clientWidth]);

  return isSidebarOpen ? (
    <div className="sticky top-0 z-20 h-screen py-16 pl-8 max-md:py-0 max-md:pl-0">
      <div className="z-10 h-full min-w-248 overflow-y-scroll rounded-xl bg-[#252525] shadow-md shadow-black max-md:absolute max-md:h-screen max-md:min-w-248 max-md:rounded-l-0 max-md:rounded-r-sm">
        <div className="info-header border-b-1 border-gray-8 p-24">{Header}</div>
        <Menu menuList={menuList} />
      </div>
      <div
        className="fixed top-0 z-0 h-screen w-screen bg-[rgba(0,0,0,0.1)] md:hidden"
        onClick={() => {
          setIsSideBarOpen(false);
        }}
      />
    </div>
  ) : null;
};

export default SideBar;
