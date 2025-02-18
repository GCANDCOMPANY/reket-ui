import { useState, useEffect, useContext } from 'react';
import { UIContext } from '../../UIProvider';
import { createPortal } from 'react-dom';

const Alert = () => {
  const { alertState, changeAlertState } = useContext(UIContext);
  const { type, title, content, onOk, onCancel } = alertState;
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

  return isDomReady && alertState.isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-50 h-screen w-screen">
          <div
            className={`absolute left-[50%] z-10 translate-x-[-50%] transform rounded-lg bg-white p-32 shadow transition-transform  max-md:bottom-0 max-md:w-full md:top-[50%] md:min-w-[448px] md:translate-y-[-50%]`}
          >
            {type === 'confirm' ? <p>confirm</p> : <p>warn</p>}
            <p>{title}</p>
            <p>{content}</p>
            <button
              onClick={() => {
                changeAlertState({ ...alertState, isOpen: false });
                if (onCancel) onCancel();
              }}
            >
              취소
            </button>
            <button
              onClick={() => {
                changeAlertState({ ...alertState, isOpen: false });
                if (onOk) onOk();
              }}
            >
              확인
            </button>
          </div>
          <div
            className="h-full w-full bg-black bg-opacity-20"
            onClick={() => {
              changeAlertState({ ...alertState, isOpen: false });
            }}
          />
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )
    : null;
};

export default Alert;
