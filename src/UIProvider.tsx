import { createContext, useContext, useMemo, useCallback, useEffect } from 'react';
import { Alert } from './components/dialog';
import { AlertInterface, StateInterface } from './types/app';
import { useStore } from './hooks/useStore';

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

  useEffect(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  return (
    <UIContext.Provider value={uiContextProviderValue}>
      {children}
      <Alert />
    </UIContext.Provider>
  );
};

export const useUIContext = (): UIContextInterface => {
  const context = useContext(UIContext);
  if (!context) throw new Error('context error');
  return context;
};
