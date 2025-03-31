import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mergeStyle } from '../../../utils/style';

interface ModalProps {
  isOpen?: boolean;
  children?: (string | number | JSX.Element) | (string | number | JSX.Element)[];
  backdrop?: boolean;
  onClose?: () => Promise<void> | void;
  className?: Tailwind.ClassNames;
}

// TODO: max-width랑 max-height 설정 필요. 지금은 children 넣는대로 w,h 제멋대로 조절됨
const Modal = ({
  isOpen,
  children,
  backdrop = true,
  onClose,
  className,
}: ModalProps): JSX.Element | null => {
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(false);
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
    setIsDomReady(true);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return isDomReady && isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-50 h-screen w-screen">
          <div
            className={mergeStyle(
              `absolute left-[50%] z-10 translate-x-[-50%] transform rounded-lg bg-white p-32 shadow transition-transform  max-md:bottom-0 max-md:w-full md:top-[50%] md:min-w-[448px] md:translate-y-[-50%]`,
              className,
            )}
          >
            {children}
          </div>
          {backdrop ? (
            <div className="h-full w-full bg-black bg-opacity-20" onClick={onClose} />
          ) : null}
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )
    : null;
};

export default Modal;
