import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { Alert, Notification } from './components';
import 'src/styles/globals.scss';

interface UIProviderProps {
  children: JSX.Element;
}

const UIProvider = ({ children }: UIProviderProps): JSX.Element => {
  useEffect(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  return (
    <RecoilRoot>
      {children}
      <Alert />
      <Notification />
    </RecoilRoot>
  );
};

export default UIProvider;
