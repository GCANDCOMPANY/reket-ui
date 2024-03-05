import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useDevice } from 'src/hooks';
import app from 'src/recoils/app';
import MenuButton from './MenuButton';

export interface MenuElement {
  title: string | number;
  dropdownList?: { name: string | number; onPress: () => Promise<void> | void }[];
}

interface MenuProps {
  menuList?: MenuElement[];
}

const Menu = ({ menuList = [] }: MenuProps) => {
  const setSidebarOpen = useSetRecoilState(app.sidebarOpen);
  const device = useDevice();

  return (
    <div className="[&>*:last-child]:border-none">
      {menuList.map(({ title, dropdownList }) => (
        <MenuButton
          title={title}
          dropdown={!!dropdownList}
          dropdownList={dropdownList?.map((el) => ({
            name: el.name,
            onPress: () => {
              el.onPress();
              if (device.isMobile) setSidebarOpen(false);
            },
          }))}
        />
      ))}
    </div>
  );
};

export default Menu;
