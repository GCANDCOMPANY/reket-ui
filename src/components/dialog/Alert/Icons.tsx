import React from 'react';
import {
  IoAlertCircleOutline,
  IoBanOutline,
  IoCheckmark,
  IoInformationCircleOutline,
} from 'react-icons/io5';
import { AlertType } from 'src/recoils/app/atoms';

interface IconsProps {
  type: AlertType;
}

const Icons = ({ type }: IconsProps): JSX.Element | null => {
  if (type === 'info')
    return <IoInformationCircleOutline className="shrink-0 text-48 text-blue-6" />;

  if (type === 'confirm' || type === 'success')
    return <IoCheckmark className="shrink-0 text-48 text-green-6" />;

  if (type === 'warn') return <IoAlertCircleOutline className="shrink-0 text-48 text-yellow-6" />;

  if (type === 'error') return <IoBanOutline className="shrink-0 text-48 text-red-6" />;

  return null;
};

export default Icons;
