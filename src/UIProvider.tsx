import { createContext, useContext } from 'react';
import { Alert, Toast } from './components/dialog';
import { AlertInterface } from './types/app';
import { initialState, useStore, StateInterface } from './hooks/useStore';

interface UIContextInterface {
  state: StateInterface;
  updateAlertState: (alertState: AlertInterface) => void;
  updateToastState: (toastState: any) => void;
}

const UIContext = createContext<UIContextInterface>({
  state: initialState,
  updateAlertState: () => {},
  updateToastState: () => {},
});

export const UIProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { state, updateAlertState, updateToastState } = useStore();

  return (
    <UIContext.Provider value={{ state, updateAlertState, updateToastState }}>
      {children}
      <Alert />
      <Toast />
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
