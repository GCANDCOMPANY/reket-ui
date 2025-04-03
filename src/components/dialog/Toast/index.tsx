import { useEffect, useState } from 'react';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { MdCancel } from '@react-icons/all-files/md/MdCancel';
import { MdError } from '@react-icons/all-files/md/MdError';
import { useUIContext } from '../../../UIProvider';

const typeStyles = {
  success: 'text-green-7',
  error: 'text-red-7',
  warn: 'text-yellow-7',
  info: 'text-blue-7',
};

const iconStyles = {
  success: <FaCheckCircle className="mr-6 text-18" />,
  error: <MdCancel className="mr-6 text-20" />,
  warn: <MdError className="mr-6 text-20" />,
  info: <MdError className="mr-6 text-20" />,
};

const Toast = () => {
  const { state, updateToastState } = useUIContext();
  const { isOpen, type, title, content } = state.toast;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      const fadeOutTimer = setTimeout(() => setIsVisible(false), 2100);
      const closeTimer = setTimeout(() => {
        updateToastState({
          ...state.toast,
          isOpen: false,
        });
      }, 2600);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isOpen, updateToastState]);

  if (!isOpen) return null;

  return (
    <div className="fixed right-16 top-16 z-50">
      <div
        className={`
          w-[300px] transform rounded border-l-6 bg-white px-18 py-20 shadow transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}
          ${typeStyles[type]}
          `}
      >
        <div className="mb-8 flex items-center">
          {iconStyles[type]}
          <strong className="block text-16 font-semibold tracking-tight">{title}</strong>
        </div>
        <p className="text-15 text-black">{content}</p>
      </div>
    </div>
  );
};

export default Toast;
