import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mergeStyle } from '../../../utils/style';

interface ModalProps {
  isOpen?: boolean;
  children?: (string | number | JSX.Element) | (string | number | JSX.Element)[];
  backdrop?: boolean;
  onClose?: () => Promise<void> | void;
  className?: Tailwind.ClassNames;
}

const Modal = ({
  isOpen,
  children,
  backdrop = true,
  onClose,
  className,
}: ModalProps): JSX.Element | null => {
  const modalContentStyle = mergeStyle(
    `absolute left-[50%] z-10 max-h-[80vh] translate-x-[-50%] transform overflow-auto rounded-lg bg-white p-32 shadow transition-transform max-md:bottom-0 max-md:w-full md:top-[50%] md:min-w-[448px] md:translate-y-[-50%]`,
    className,
  );

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-50 h-screen w-screen">
          <div className={modalContentStyle}>{children}</div>
          {backdrop ? (
            <div className="h-full w-full bg-black bg-opacity-20" onClick={onClose} />
          ) : null}
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )
    : null;
};

export default Modal;
