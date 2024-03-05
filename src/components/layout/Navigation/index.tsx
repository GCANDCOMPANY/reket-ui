import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { useSetRecoilState } from 'recoil';
import app from 'src/recoils/app';
import { mergeStyle } from 'src/utils/style';

interface NavigationProps extends React.ComponentProps<'nav'> {
  Component?: string | number | JSX.Element;
}

const Navigation = ({ Component, className, ...props }: NavigationProps) => {
  const setIsSideBarOpen = useSetRecoilState(app.sidebarOpen);

  return (
    <nav
      className={mergeStyle(
        'sticky top-0 z-10 flex items-center justify-between bg-white px-24 pb-24 pt-32 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.3)] max-md:mx-0 max-md:px-16 max-md:py-16',
        className,
      )}
      {...props}
    >
      <div className="flex items-center">
        <RiMenu2Fill
          size={24}
          onClick={() => {
            setIsSideBarOpen((prev) => !prev);
          }}
          className="mr-16 cursor-pointer md:hidden"
        />
      </div>
      {Component}
    </nav>
  );
};

export default Navigation;
