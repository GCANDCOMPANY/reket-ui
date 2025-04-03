import { createContext, useContext, useMemo, useCallback, useEffect } from 'react';
import { Alert, Toast } from './components/dialog';
import { AlertInterface, StateInterface, ToastInterface } from './types/app';
import { useStore } from './hooks/useStore';

interface UIContextInterface {
  state: StateInterface;
  updateAlertState: (alertState: AlertInterface) => void;
  updateToastState: (toastState: ToastInterface) => void;
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

  const updateToastState = useCallback(
    (toastState: ToastInterface) => {
      dispatch({ type: 'UPDATE_TOAST', payload: { ...state, toast: toastState } });
    },
    [dispatch, state],
  );

  const uiContextProviderValue = useMemo(
    () => ({ state, updateAlertState, updateToastState }),
    [state],
  );

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
      <Toast />
    </UIContext.Provider>
  );
};

export const useUIContext = (): UIContextInterface => {
  const context = useContext(UIContext);
  if (!context) throw new Error('context error');
  return context;
};
