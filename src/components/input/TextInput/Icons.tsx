import React from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { RiInputMethodLine } from 'react-icons/ri';
import { TiKeyOutline } from 'react-icons/ti';
import { IconType } from '.';

interface IconsProps {
  type?: IconType;
}

const Icons = ({ type }: IconsProps): JSX.Element | null => {
  if (type === 'email') return <IoMailOutline className="h-full w-full text-gray-7" />;
  if (type === 'text') return <RiInputMethodLine className="h-full w-full text-gray-7" />;
  if (type === 'password') return <TiKeyOutline className="h-full w-full text-gray-7" />;
  return null;
};

export default Icons;
