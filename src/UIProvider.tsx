import { createContext, useContext, useMemo } from 'react';
import { Alert } from './components/dialog';
import { AlertInterface, StateInterface } from './types/app';
import { initialState, useStore } from './hooks/useStore';

interface UIContextInterface {
  state: StateInterface;
  updateAlertState: (alertState: AlertInterface) => void;
}

const UIContext = createContext<UIContextInterface>({
  state: initialState,
  updateAlertState: () => {},
});

export const UIProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { state, dispatch } = useStore();

  const updateAlertState = (alertState: AlertInterface) => {
    dispatch({ type: 'UPDATE_ALERT', payload: { ...state, alert: alertState } });
  };

  const uiContextProviderValue = useMemo(
    () => ({ state, updateAlertState }),
    [state, updateAlertState],
  );

  return (
    <UIContext.Provider value={uiContextProviderValue}>
      {children}
      <Alert />
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
