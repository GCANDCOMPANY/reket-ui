import { createContext, useContext, useMemo, useCallback } from 'react';
import { Alert } from './components/dialog';
import { AlertInterface, StateInterface } from './types/app';
import { initialState, useStore } from './hooks/useStore';

interface UIContextInterface {
  state: StateInterface;
  updateAlertState: (alertState: AlertInterface) => void;
}

const UIContext = createContext<UIContextInterface | null>(null);

export const UIProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { state, dispatch } = useStore();

  const updateAlertState = useCallback(
    (alertState: AlertInterface) => {
      dispatch({ type: 'UPDATE_ALERT', payload: { ...state, alert: alertState } });
    },
    [dispatch, state],
  );

  const uiContextProviderValue = useMemo(() => ({ state, updateAlertState }), [state]);

  return (
    <UIContext.Provider value={uiContextProviderValue}>
      {children}
      <Alert />
    </UIContext.Provider>
  );
};

export const useUIContext = (): UIContextInterface => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within a UIProvider');
  }
  return context;
};
