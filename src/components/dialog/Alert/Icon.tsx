import { IoAlertCircleOutline } from '@react-icons/all-files/io5/IoAlertCircleOutline';
import { IoInformationCircleOutline } from '@react-icons/all-files/io5/IoInformationCircleOutline';
import { IoCheckmark } from '@react-icons/all-files/io5/IoCheckmark';
import { IoBanOutline } from '@react-icons/all-files/io5/IoBanOutline';

import { AlertType } from '../../../types/app';

interface Props {
  type?: AlertType;
}

const Icon = ({ type = 'confirm' }: Props) => {
  return (
    <>
      {type === 'info' && <IoInformationCircleOutline className="shrink-0 text-48 text-blue-6" />}
      {(type === 'confirm' || type === 'success') && (
        <IoCheckmark className="shrink-0 text-48 text-green-6" />
      )}
      {type === 'warn' && <IoAlertCircleOutline className="shrink-0 text-48 text-yellow-6" />}
      {type === 'error' && <IoBanOutline className="shrink-0 text-48 text-red-6" />}
    </>
  );
};

export default Icon;
