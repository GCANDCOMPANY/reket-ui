import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoAlertCircleOutline } from '@react-icons/all-files/io5/IoAlertCircleOutline';
import { useUIContext } from '../../UIProvider';
import { Button } from '../button';

const Alert = () => {
  const { state, updateAlertState } = useUIContext();
  const { isOpen, type, title, content, onOk, onCancel } = state;
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
    setIsDomReady(true);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return isDomReady && isOpen
    ? createPortal(
        <div className="z-50 h-screen w-screen">
          <div
            className="fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40"
            onClick={() => {
              if (onCancel) onCancel();
              updateAlertState({ ...state, isOpen: false });
            }}
          />
          <div className="fixed left-[50%] top-[12%] z-40 min-w-[356px] max-w-[448px] translate-x-[-50%] transform animate-fadein rounded-lg border-1 border-[#f1f1f1] bg-white p-24 shadow">
            <div className="mb-32 flex-center">
              {type === 'warn' && (
                <IoAlertCircleOutline className="shrink-0 text-48 text-yellow-6" />
              )}
              <div className="ml-24 flex-1 rounded">
                <p className="mb-8 text-18 font-semibold max-md:text-16">{title}</p>
                <p className="whitespace-pre-line max-md:text-14">{content}</p>
              </div>
            </div>
            <div className="flex justify-end">
              {onCancel && (
                <button
                  className="mr-12"
                  onClick={() => {
                    if (onCancel) onCancel();
                    updateAlertState({ ...state, isOpen: false });
                  }}
                >
                  취소
                </button>
              )}
              <Button
                text="확인"
                option="filled"
                color="dark"
                onClick={() => {
                  if (onOk) onOk();
                  updateAlertState({ ...state, isOpen: false });
                }}
              />
            </div>
          </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )
    : null;
};

export default Alert;
