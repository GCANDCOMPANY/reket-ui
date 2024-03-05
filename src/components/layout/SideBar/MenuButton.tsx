import React, { useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

interface DropDownList {
  name: string | number;
  onPress: () => Promise<void> | void;
}

interface MenuButtonProps {
  title: string | number;
  onPress?: () => void | Promise<void>;
  dropdown?: boolean;
  dropdownList?: DropDownList[];
}

const MenuButton = ({
  title,
  onPress = () => {},
  dropdown = false,
  dropdownList = [],
}: MenuButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b-1 border-gray-8">
      <button
        className={`flex w-full justify-between ${
          isOpen ? 'border-l-white' : 'border-l-secondary bg-secondary'
        } border-l-4 px-20 py-24 pl-16 align-middle hover:bg-[#111]`}
        onClick={() => {
          onPress();
          if (dropdown) setIsOpen((prev) => !prev);
        }}
      >
        <p className="text-16 text-white">{title}</p>
        {dropdown ? (
          isOpen ? (
            <VscChevronUp size={24} color="white" />
          ) : (
            <VscChevronDown size={24} color="white" />
          )
        ) : null}
      </button>
      {isOpen && (
        <div className="bg-[#303030] shadow-inner">
          {dropdownList.map((item, index) => (
            <button
              key={index}
              className="block w-full px-32 py-16 text-left text-14 font-semibold text-white hover:bg-[#202020]"
              onClick={item.onPress}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
