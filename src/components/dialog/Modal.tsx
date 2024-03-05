import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen?: boolean;
  children?: (string | number | JSX.Element) | (string | number | JSX.Element)[];
  backdrop?: boolean;
  onClose?: () => Promise<void> | void;
}

const Modal = ({ isOpen, children, backdrop = true, onClose }: ModalProps): JSX.Element | null => {
  return isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-20 h-screen w-screen">
          <div className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] transform rounded-lg bg-white p-32 shadow">
            {children}
          </div>
          {backdrop && <div className="h-full w-full bg-black bg-opacity-20 " onClick={onClose} />}
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )
    : null;
};

export default Modal;
