import React from 'react';
import { IoBanOutline, IoCheckmark } from 'react-icons/io5';
import { NotificationType } from 'src/recoils/app/atoms';

interface IconsProps {
  type: NotificationType;
}

const Icons = ({ type }: IconsProps): JSX.Element | null => {
  if (type === 'success') return <IoCheckmark className="ml-16 shrink-0 text-32 text-green-6" />;

  if (type === 'error') return <IoBanOutline className="ml-16 shrink-0 text-32 text-red-6" />;

  return null;
};

export default Icons;
