import { createContext, useContext } from 'react';
import { Alert, Toast } from './components/dialog';
import { AlertInterface } from './types/app';
import { StateInterface } from './types/app';
import { initialState, useStore } from './hooks/useStore';

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
  const { state, dispatch } = useStore();

  const updateAlertState = (alertState: AlertInterface) => {
    dispatch({ type: 'UPDATE_ALERT', payload: { ...state, alert: alertState } });
  };

  const updateToastState = (toastState: any) => {
    dispatch({ type: 'UPDATE_TOAST', payload: { ...state, toast: toastState } });
  };

  return (
    <UIContext.Provider value={{ state, updateAlertState, updateToastState }}>
      {children}
      <Alert />
      <Toast />
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
